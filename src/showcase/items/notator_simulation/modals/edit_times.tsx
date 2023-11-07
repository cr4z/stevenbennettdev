import { Box, Button, Typography } from "@mui/material";
import { TimeAutocomplete } from "../components/time_picker";
import { EventTimes } from "../data/types/event";
import { useRef, useState } from "react";
import { Dayjs } from "dayjs";
import { NotatorSimulationModal } from "../components/modal";

export function EditEventTimesModal(props: {
  open: boolean;
  onClose: () => void;
  onApplyTimes: (v: EventTimes) => void;
  defaultValues: EventTimes;
}) {
  const focusRef = useRef<HTMLInputElement>(null);

  const [stagedStart, setStagedStart] = useState<Dayjs>(
    props.defaultValues.startTime
  );
  const [stagedEnd, setStagedEnd] = useState<Dayjs>(
    props.defaultValues.endTime
  );

  return (
    <>
      <NotatorSimulationModal
        open={props.open}
        onClose={() => props.onClose()}
        onFocusReady={() => {
          if (props.open) {
            focusRef.current?.focus();
          }
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onApplyTimes({
              startTime: stagedStart,
              endTime: stagedEnd,
            });
            props.onClose();
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <Typography variant="h6">Edit Event Times</Typography>
            <Box sx={{ display: "flex" }}>
              {/* Add start time datepicker */}
              <TimeAutocomplete
                label="Start Time"
                value={stagedStart}
                onChange={(v: Dayjs) => setStagedStart(v)}
                ref={focusRef}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              {/* Add end time datepicker */}
              <TimeAutocomplete
                label="End Time"
                value={stagedEnd}
                onChange={(v: Dayjs) => setStagedEnd(v)}
              />
            </Box>
          </Box>
          <Box sx={{ padding: "1rem", display: "flex", gap: "1rem" }}>
            <Button fullWidth onClick={() => props.onClose()} type="button">
              Cancel
            </Button>
            <Button type="submit" fullWidth variant="contained">
              Apply
            </Button>
          </Box>
        </form>
      </NotatorSimulationModal>
    </>
  );
}
