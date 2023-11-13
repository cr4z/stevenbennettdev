import { ReportContext } from "./context";
import { useState, useEffect } from "react";
import { useSoftRefresh } from "./modules/use_refresh";
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

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  const notatorToolModules = useNotatorToolModules();

  return (
    <ReportContext.Provider value={notatorToolModules}>
      {props.children}
    </ReportContext.Provider>
  );
}

export interface NotatorToolModules {
  report: NotatorTruckerReport | null;
  draftReport: NotatorTruckerReport | null;
  editDraft: EditDraftFunctionType;
  saveReport: SaveReportFunctionType;
  truckerTools: EditTruckerTools;
  truckerSelectorTools: TruckerSelectorTools;
  viewportNavbarTools: ViewportNavbarTools;
  isSaveSpinnerActive: boolean;
}
function useNotatorToolModules(): NotatorToolModules {
  // Local Modules

  const [isSaveSpinnerActive, setIsSaveSpinnerActive] =
    useState<boolean>(false);

  // Imported Modules

  const { softRefreshSwitch, toggleSoftRefresh } = useSoftRefresh();

  const report = useFetchReport({
    dependencies: { softRefreshSwitch },
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
    toggleSoftRefresh,
  });

  const viewportNavbarTools = useViewportNavbarTools();

  // Lifecycle Effects

  useEffect(() => {
    viewportNavbarTools.setToFirstTab();
  }, [truckerSelectorTools.selectedTruckerID]);

  // Return Statement

  return {
    draftReport,
    editDraft,
    report,
    saveReport,
    isSaveSpinnerActive,
    truckerSelectorTools,
    viewportNavbarTools,
    truckerTools,
  };
}
