import { ReportContext } from "./context";
import { useState, useEffect } from "react";
import { useSoftRefresh as useRefetch } from "./modules/use_refresh";
import { EditDraftFunctionType, useDraftReport } from "./modules/use_draft";
import { SaveReportFunctionType, useSaveReport } from "./modules/use_save";
import { useFetchReport } from "./modules/use_fetch_report";
import { TruckerReport } from "../data/types/report";
import useTruckerSelectorTools, { TruckerSelectorTools } from "./modules/use_trucker_selector";
import useViewportNavbarTools, { ViewportNavbarTools } from "./modules/use_navbar";
import { TruckerTools, useTruckerTools } from "./modules/use_trucker_tools";
import { useFetchWarehouseProfile } from "./modules/use_fetch_warehouse_profile";
import { WarehouseProfile } from "../data/types/warehouse_profile";

export function FormToolsProvider(props: { children: React.ReactNode }) {
  const complexFormToolModules = useComplexFormToolModules();

  return <ReportContext.Provider value={complexFormToolModules}>{props.children}</ReportContext.Provider>;
}

export interface ComplexFormToolModules {
  warehouseProfile: WarehouseProfile | null;
  report: TruckerReport | null;
  draftReport: TruckerReport | null;
  editDraft: EditDraftFunctionType;
  saveReport: SaveReportFunctionType;
  truckerTools: TruckerTools;
  truckerSelectorTools: TruckerSelectorTools;
  viewportNavbarTools: ViewportNavbarTools;
  isSaveSpinnerActive: boolean;
  refetchSwitch: boolean;
  /**
   * This will cause the complex form to refetch its data, rerendering all dependent components.
   */
  triggerRefetchSwitch: () => void;
}
function useComplexFormToolModules(): ComplexFormToolModules {
  // Local Modules

  const [isSaveSpinnerActive, setIsSaveSpinnerActive] = useState<boolean>(false);

  // Imported Modules

  const warehouseProfile = useFetchWarehouseProfile();

  const { refetchSwitch, triggerRefetchSwitch } = useRefetch();

  const report = useFetchReport({
    dependencies: { refetchSwitch },
    onSetIsSaveSpinnerActive: (v: boolean) => setIsSaveSpinnerActive(v),
  });

  const { draftReport, editDraft } = useDraftReport({
    dependencies: { report },
  });

  const truckerSelectorTools = useTruckerSelectorTools({
    dependencies: { draftReport, report },
  });

  const truckerTools = useTruckerTools({
    dependencies: {
      report,
      draftReport,
      editDraft,
      selectedTruckerIndex: truckerSelectorTools.selectedTruckerIndex,
    },
  });

  const saveReport = useSaveReport({
    onSetIsSaveSpinnerActive: (v: boolean) => setIsSaveSpinnerActive(v),
    onTriggerRefetchSwitch: () => triggerRefetchSwitch(),
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
