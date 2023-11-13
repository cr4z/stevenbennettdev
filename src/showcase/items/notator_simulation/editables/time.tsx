import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useNotatorTools } from "../tools/use_notator_tools";
import { EditEventTimesModal } from "../modals/edit_times";
import { EventTimes } from "../data/types/report";
import { Chip } from "../components/chip";
import { FaClock } from "react-icons/fa";

export function EditableTime() {
  const [open, setOpen] = useState<boolean>(false);

  const { draftReport: draftEvent, editDraft } = useNotatorTools();

  function onApplyTimes(v: EventTimes) {
    editDraft("eventTimes", v);
  }

  const defaultValues: EventTimes = {
    startTime: draftEvent!.eventTimes.startTime,
    endTime: draftEvent!.eventTimes.endTime,
  };

  return (
    <>
      {draftEvent && (
        <>
          <EditEventTimesModal
            defaultValues={defaultValues}
            open={open}
            onClose={() => setOpen(false)}
            onApplyTimes={(v) => onApplyTimes(v)}
          />
          <Chip onClick={() => setOpen(true)}>
            <FaClock />
            <Typography variant="body2">
              {dayjs(draftEvent.eventTimes.startTime).format("h:mm a - ") +
                dayjs(draftEvent.eventTimes.endTime).format("h:mm a")}
            </Typography>
          </Chip>
        </>
      )}
    </>
  );
}
