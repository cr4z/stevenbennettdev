import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { useNotatorTools } from "../../tools/hooks/use_notator_tools";
import { BsFillTrash3Fill } from "react-icons/bs";
import { NotatorEventSegment } from "../../data/types/event";
import { useState } from "react";
import LeftWidgetOptions from "./segments";

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
        <Tooltip title="Remove Segments">
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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        pt: ".5rem",
      }}
    >
      {props.segments.map((s, i) => (
        <LeftWidgetOptions.SegmentButton key={i} text={s.title} />
      ))}

      <Tooltip title="Add event segment">
        <div>
          <LeftWidgetOptions.AddSegmentButton />
        </div>
      </Tooltip>
    </Box>
  );
}

function RemoveView(props: {
  segments: NotatorEventSegment[];
  onBack: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        pt: ".5rem",
      }}
    >
      {props.segments.map((s, i) => (
        <LeftWidgetOptions.SelectableSegment key={i} text={s.title} />
      ))}

      <LeftWidgetOptions.RemoveModeButtons
        onBack={() => props.onBack()}
        onRemove={() => {}}
      />
    </Box>
  );
}
