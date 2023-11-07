import { Typography } from "@mui/material";
import { useState } from "react";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { EditEventTimesModal } from "../modals/edit_times";
import { EventTimes } from "../data/types/event";
import { Chip } from "../components/chip";
import { AiFillCalendar } from "react-icons/ai";

export function EditableDate() {
  const [open, setOpen] = useState<boolean>(false);

  const { draftEvent, editDraft } = useNotatorTools();

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
            <AiFillCalendar />
            <Typography variant="body2">11/7/23</Typography>
          </Chip>
        </>
      )}
    </>
  );
}
