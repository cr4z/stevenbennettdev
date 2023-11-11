import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNotatorTools } from "../../tools/hooks/use_notator_tools";
import { BsFillTrash3Fill } from "react-icons/bs";
import { NotatorEventSegment } from "../../data/types/event";
import { useState } from "react";
import LeftWidgetOptions from "./segments";
import FadeIn from "../../components/fade_in";
import toggleFromArray from "../../utils/toggle_from_array";
import ConfirmModal from "../../modals/confirm";
import { CreateSegmentModal } from "../../modals/create_segment";
import { ShadowScrollProvider } from "../../components/shadow_scroll";

export const NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE = "#FFFD";

export function LeftWidget() {
  const { draftEvent } = useNotatorTools();

  const [isRemoveMode, setIsRemoveMode] = useState<boolean>(false);

  return (
    <Paper
      sx={{
        flexBasis: "20rem",
        background:
          "linear-gradient(197deg, rgba(14, 14, 15, 0.75) -1.71%, #0E0E0F 102.94%)",
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
          {isRemoveMode ? "Remove Event Segments" : "Event Segments"}
        </Typography>
        <Tooltip title={isRemoveMode ? "Go Back" : "Remove Event Segments"}>
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

      {draftEvent && (
        <>
          {isRemoveMode ? (
            <RemoveView
              segments={draftEvent.segments}
              onBack={() => setIsRemoveMode(false)}
            />
          ) : (
            <DefaultView segments={draftEvent.segments} />
          )}
        </>
      )}
    </Paper>
  );
}

function DefaultView(props: { segments: NotatorEventSegment[] }) {
  const { selectedSegmentTools } = useNotatorTools();

  const [createSegmentOpen, setCreateSegmentOpen] = useState<boolean>(false);

  return (
    <>
      <CreateSegmentModal
        open={createSegmentOpen}
        onClose={() => setCreateSegmentOpen(false)}
      />

      <ScrollbarLayout dependencies={{ segments: props.segments }}>
        {props.segments.map((s, i) => (
          <FadeIn>
            <LeftWidgetOptions.SegmentButton
              key={i}
              text={s.title}
              onClick={() => selectedSegmentTools.setSelectedSegmentID(s.id)}
            />
          </FadeIn>
        ))}
      </ScrollbarLayout>

      <Tooltip title="Add event segment">
        <div>
          <LeftWidgetOptions.AddSegmentButton
            onClick={() => setCreateSegmentOpen(true)}
          />
        </div>
      </Tooltip>
    </>
  );
}

function RemoveView(props: {
  segments: NotatorEventSegment[];
  onBack: () => void;
}) {
  const {
    editDraft,
    selectedSegmentTools: { resetSelectedSegmentID },
  } = useNotatorTools();

  const [selectedIDs, setSelectedIDs] = useState<string[]>([]);
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  function handleToggleIndex(id: string) {
    const si = toggleFromArray(selectedIDs, id);
    setSelectedIDs(si);
  }

  function handleRemovingSegments() {
    const segmentsWithoutSelected = props.segments.filter(
      (s) => !selectedIDs.includes(s.id)
    );

    const freshEvent = editDraft("segments", segmentsWithoutSelected, () =>
      resetSelectedSegmentID(freshEvent)
    );
    props.onBack();
  }

  return (
    <>
      <ConfirmModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleRemovingSegments}
        overrideDisplay={{
          title: "Delete Segments",
          description:
            "Are you sure that you want to delete the selected segments from your event?",
          confirmColor: "error",
        }}
      />

      <ScrollbarLayout dependencies={{ segments: props.segments }}>
        {props.segments.map((s, i) => (
          <FadeIn>
            <LeftWidgetOptions.SelectableSegment
              key={i}
              text={s.title}
              onToggle={() => handleToggleIndex(s.id)}
              value={selectedIDs.includes(s.id)}
            />
          </FadeIn>
        ))}
      </ScrollbarLayout>

      <LeftWidgetOptions.RemoveModeButtons
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
  dependencies: { segments: NotatorEventSegment[] };
}) {
  return (
    <Box sx={{ pb: ".5rem" }}>
      <ShadowScrollProvider
        maxHeight="calc(100vh - 30.9rem)"
        gap=".5rem"
        dependencies={[props.dependencies.segments.length]}
      >
        {props.children}
      </ShadowScrollProvider>
    </Box>
  );
}
