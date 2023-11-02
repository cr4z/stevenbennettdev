import { Box, Button, ButtonBase, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import { ReactComponent as ClockSVG } from "../svg/ClockSVG.svg";
import { useState } from "react";
import { NotatorSimulationModal } from "../components/modal";
import TimeAutocomplete from "../components/time_picker";

export function EditableTime(props: {
  startTime: Dayjs;
  endTime: Dayjs;
  onTimesChange: (v: StartAndEndTimes) => void;
}) {
  const color = "#000A";

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StartEndTimeEditorModal
        open={open}
        onClose={() => setOpen(false)}
        onApplyTimes={(v) => props.onTimesChange(v)}
      />
      <ButtonBase
        onClick={() => setOpen(true)}
        sx={{
          path: { fill: color },
          borderRadius: 99,
          padding: "2px 6px",
          display: "flex",
          alignItems: "center",
          gap: ".4rem",
          ":hover": {
            bgcolor: "#0001",
          },
        }}
      >
        <ClockSVG />
        <Typography sx={{ color }} variant="body2">
          {props.startTime.format("H:mm a - ") + props.endTime.format("H:mm a")}
        </Typography>
      </ButtonBase>
    </>
  );
}

function StartEndTimeEditorModal(props: {
  open: boolean;
  onClose: () => void;
  onApplyTimes: (v: StartAndEndTimes) => void;
}) {
  const [startTime, setStartTime] = useState<Dayjs>(dayjs());
  const [endTime, setEndTime] = useState<Dayjs>(dayjs());

  return (
    <NotatorSimulationModal open={props.open} onClose={() => props.onClose()}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
          width: "15rem",
        }}
      >
        <TimeAutocomplete
          label="Start Time"
          value={startTime}
          onChange={(v) => setStartTime(v)}
        />
        <TimeAutocomplete
          label="End Time"
          value={endTime}
          onChange={(v) => setEndTime(v)}
        />
      </Box>
      <Box sx={{ padding: "1rem", display: "flex", gap: "1rem" }}>
        <Button fullWidth onClick={() => props.onClose()}>
          Cancel
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            props.onApplyTimes({ startTime, endTime });
            props.onClose();
          }}
        >
          Apply
        </Button>
      </Box>
    </NotatorSimulationModal>
  );
}

type StartAndEndTimes = { startTime: Dayjs; endTime: Dayjs };
