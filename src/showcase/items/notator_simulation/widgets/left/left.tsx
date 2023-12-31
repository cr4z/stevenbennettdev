import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useFormTools } from "../../tools/use_form_tools";
import { BsFillTrash3Fill } from "react-icons/bs";
import { TruckerJournal } from "../../data/types/report";
import { useState } from "react";
import LeftWidgetOptions from "./trucker_tabs";
import SBDFadeIn from "../../../../../sbd_development_kit/components/fade_in";
import toggleFromArray from "../../utils/toggle_from_array";
import ConfirmModal from "../../modals/templates/confirm";
import { CreateTruckerModal } from "../../modals/views/add_trucker";
import { SBDShadowScrollProvider } from "../../../../../sbd_development_kit/components/shadow_scroll";

export const NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE = "#FFFD";

export function LeftWidget() {
  const { draftReport } = useFormTools();

  const [isRemoveMode, setIsRemoveMode] = useState<boolean>(false);

  return (
    <Paper
      sx={{
        flexBasis: "20rem",
        minWidth: "20rem",
        background: "linear-gradient(197deg, rgba(14, 14, 15, 0.75) -1.71%, #0E0E0F 102.94%)",
        padding: ".5rem",
        maxHeight: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}
          sx={{ pl: ".5rem" }}
          className="noselect"
        >
          {isRemoveMode ? "Remove Truckers" : "Truckers"}
        </Typography>
        <Tooltip title={isRemoveMode ? "Go Back" : "Remove Truckers"}>
          <IconButton
            sx={{
              svg: {
                color: NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE,
                width: "1.2rem",
                height: "1.2rem",
              },
            }}
            onClick={() => setIsRemoveMode(!isRemoveMode)}
          >
            <BsFillTrash3Fill />
          </IconButton>
        </Tooltip>
      </Box>

      {draftReport && (
        <>
          {isRemoveMode ? (
            <RemoveView
              truckerJournals={draftReport.truckerJournals}
              onBack={() => setIsRemoveMode(false)}
            />
          ) : (
            <DefaultView truckerJournals={draftReport.truckerJournals} />
          )}
        </>
      )}
    </Paper>
  );
}

function DefaultView(props: { truckerJournals: TruckerJournal[] }) {
  const { truckerSelectorTools } = useFormTools();

  const [createTruckerOpen, setCreateTruckerOpen] = useState<boolean>(false);

  return (
    <>
      <CreateTruckerModal open={createTruckerOpen} onClose={() => setCreateTruckerOpen(false)} />

      <ScrollbarLayout dependencies={{ truckerJournals: props.truckerJournals }}>
        {props.truckerJournals.map((s, i) => (
          <LeftWidgetOptions.TruckerTab
            key={i}
            text={s.fullName}
            onClick={() => truckerSelectorTools.setSelectedTruckerID(s.id)}
            highlighted={s.id === truckerSelectorTools.selectedTruckerID}
          />
        ))}
      </ScrollbarLayout>

      <Tooltip title="Add Trucker to Report">
        <div>
          <LeftWidgetOptions.AddTruckerButton onClick={() => setCreateTruckerOpen(true)} />
        </div>
      </Tooltip>
    </>
  );
}

function RemoveView(props: { truckerJournals: TruckerJournal[]; onBack: () => void }) {
  const {
    editDraft,
    truckerSelectorTools: { resetSelectedTruckerToFirst },
  } = useFormTools();

  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  function handleToggleIndex(id: string) {
    const si = toggleFromArray(selectedIDs, id);
    setSelectedIDs(si);
  }

  function handleRemovingTruckers() {
    const truckerJournalsWithoutSelected = props.truckerJournals.filter((s) => !selectedIDs.includes(s.id));

    const freshEvent = editDraft({
      path: "truckerJournals",
      value: truckerJournalsWithoutSelected,
      cb: () => resetSelectedTruckerToFirst(freshEvent),
    });
    props.onBack();
  }

  return (
    <>
      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleRemovingTruckers}
        overrideDisplay={{
          title: "Remove Selected Truckers",
          description: `Are you sure that you want to delete the (${selectedIDs.length}) selected truckers from your report?`,
          confirmColor: "error",
        }}
      />

      <ScrollbarLayout dependencies={{ truckerJournals: props.truckerJournals }}>
        {props.truckerJournals.map((s, i) => (
          <SBDFadeIn key={i}>
            <LeftWidgetOptions.SelectableTruckerTab
              key={i}
              text={s.fullName}
              onToggle={() => handleToggleIndex(s.id)}
              value={selectedIDs.includes(s.id)}
            />
          </SBDFadeIn>
        ))}
      </ScrollbarLayout>

      <LeftWidgetOptions.RemoveModeActionButtons
        onBack={() => props.onBack()}
        onRemove={() => {
          setConfirmOpen(true);
        }}
        removeButtonDisabled={selectedIDs.length < 1}
      />
    </>
  );
}

function ScrollbarLayout(props: {
  children: React.ReactNode;
  dependencies: { truckerJournals: TruckerJournal[] };
}) {
  return (
    <Box sx={{ pb: ".5rem" }}>
      <SBDShadowScrollProvider
        key={crypto.randomUUID()}
        maxHeight="calc(100vh - 30.9rem)"
        gap=".5rem"
        dependencies={[props.dependencies.truckerJournals.length]}
      >
        {props.children}
      </SBDShadowScrollProvider>
    </Box>
  );
}
