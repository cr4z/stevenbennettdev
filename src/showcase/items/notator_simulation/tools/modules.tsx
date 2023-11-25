import { ReportContext } from "./context";
import { useState, useEffect } from "react";
import { useSoftRefresh as useRefetch } from "./modules/use_refresh";
import { EditDraftFunctionType, useDraftReport } from "./modules/use_draft";
import { SaveReportFunctionType, useSaveReport } from "./modules/use_save";
import { useFetchReport } from "./modules/use_fetch_report";
import { NotatorTruckerReport } from "../data/types/report";
import useTruckerSelectorTools, {
  TruckerSelectorTools,
} from "./modules/use_trucker_selector";
import useViewportNavbarTools, {
  ViewportNavbarTools,
} from "./modules/use_navbar";
import {
  EditTruckerTools,
  useEditTruckerTools,
} from "./modules/use_trucker_tools";
import { useFetchWarehouseProfile } from "./modules/use_fetch_warehouse_profile";
import { WarehouseProfile } from "../data/types/warehouse_profile";

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  const notatorToolModules = useNotatorToolModules();

  return (
    <ReportContext.Provider value={notatorToolModules}>
      {props.children}
    </ReportContext.Provider>
  );
}

export interface NotatorToolModules {
  warehouseProfile: WarehouseProfile | null;
  report: NotatorTruckerReport | null;
  draftReport: NotatorTruckerReport | null;
  editDraft: EditDraftFunctionType;
  saveReport: SaveReportFunctionType;
  truckerTools: EditTruckerTools;
  truckerSelectorTools: TruckerSelectorTools;
  viewportNavbarTools: ViewportNavbarTools;
  isSaveSpinnerActive: boolean;
  refetchSwitch: boolean;
  /**
   * This will cause the notator to refetch its data, rerendering all dependent components.
   */
  triggerRefetchSwitch: () => void;
}
function useNotatorToolModules(): NotatorToolModules {
  // Local Modules

  const [isSaveSpinnerActive, setIsSaveSpinnerActive] =
    useState<boolean>(false);

  // Imported Modules

  const warehouseProfile = useFetchWarehouseProfile();

  const { refetchSwitch, triggerRefetchSwitch } = useRefetch();

  const report = useFetchReport({
    dependencies: { refetchSwitch },
    setIsSaveSpinnerActive,
  });

  const { draftReport, editDraft } = useDraftReport({
    dependencies: { report },
  });

  const truckerSelectorTools = useTruckerSelectorTools({
    dependencies: { draftReport, report },
  });

  const truckerTools = useEditTruckerTools({
    dependencies: {
      editDraft,
      selectedTruckerIndex: truckerSelectorTools.selectedTruckerIndex,
      draftReport,
    },
  });

  const saveReport = useSaveReport({
    setIsSaveSpinnerActive,
    triggerRefetchSwitch,
  });

  const viewportNavbarTools = useViewportNavbarTools();

  // Lifecycle Effects

  useEffect(() => {
    viewportNavbarTools.setToFirstTab();
  }, [truckerSelectorTools.selectedTruckerID]);

  return {
    warehouseProfile,
    draftReport,
    editDraft,
    report,
    saveReport,
    isSaveSpinnerActive,
    truckerSelectorTools,
    viewportNavbarTools,
    truckerTools,
    refetchSwitch,
    triggerRefetchSwitch,
  };
}
