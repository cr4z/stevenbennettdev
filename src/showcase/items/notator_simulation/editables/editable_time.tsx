import { Box, Button, ButtonBase, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import { ReactComponent as ClockSVG } from "../svg/ClockSVG.svg";
import { useRef, useState, useEffect } from "react";
import { NotatorSimulationModal } from "../components/modal";
import { TimeAutocomplete } from "../components/time_picker";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";

const COLOR = "#000A";

export function EditableTime() {
  const [open, setOpen] = useState<boolean>(false);

  const { draftEvent, editDraft } = useNotatorTools();

  function onApplyTimes(v: StartAndEndTimes) {
    console.log({
      a: v.startTime.format("YYYY-MM-DD HH:mm:ss"),
      b: v.endTime.format("YYYY-MM-DD HH:mm:ss"),
    });

    editDraft("eventTimes", v);
  }

  const defaultValues: StartAndEndTimes = {
    startTime: draftEvent!.eventTimes.startTime,
    endTime: draftEvent!.eventTimes.endTime,
  };

  return (
    <>
      {draftEvent && (
        <>
          <StartEndTimeEditorModal
            defaultValues={defaultValues}
            open={open}
            onClose={() => setOpen(false)}
            onApplyTimes={(v) => onApplyTimes(v)}
          />
          <ButtonBase
            onClick={() => setOpen(true)}
            sx={{
              path: { fill: COLOR },
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
            <Typography sx={{ color: COLOR }} variant="body2">
              {dayjs(draftEvent.eventTimes.startTime).format("h:mm a - ") +
                dayjs(draftEvent.eventTimes.endTime).format("h:mm a")}
            </Typography>
          </ButtonBase>
        </>
      )}
    </>
  );
}

function StartEndTimeEditorModal(props: {
  open: boolean;
  onClose: () => void;
  onApplyTimes: (v: StartAndEndTimes) => void;
  defaultValues: StartAndEndTimes;
}) {
  const startTimeInputRef = useRef<HTMLInputElement>(null);

  const [stagedStart, setStagedStart] = useState<Dayjs>(
    props.defaultValues.startTime
  );
  const [stagedEnd, setStagedEnd] = useState<Dayjs>(
    props.defaultValues.endTime
  );

  useEffect(() => {
    if (props.open) {
      setStagedStart(props.defaultValues.startTime);
      setStagedEnd(props.defaultValues.endTime);
    }
    console.log("HEYOOOOOOOOOOOOO");
  }, [props.open]);

  return (
    <>
      <NotatorSimulationModal
        key={`NotatorSimulationModal-${props.open}`}
        open={props.open}
        onClose={() => props.onClose()}
        onTransitionEnd={() => {
          if (props.open) {
            startTimeInputRef.current?.focus();
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
              width: "15rem",
            }}
          >
            <TimeAutocomplete
              label="Start Time"
              value={stagedStart}
              onChange={(v: Dayjs) => setStagedStart(v)}
              ref={startTimeInputRef}
            />
            <TimeAutocomplete
              label="End Time"
              value={stagedEnd}
              onChange={(v: Dayjs) => setStagedEnd(v)}
            />
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

type StartAndEndTimes = { startTime: Dayjs; endTime: Dayjs };
