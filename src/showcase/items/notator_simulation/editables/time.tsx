import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useFormTools } from "../tools/use_form_tools";
import { EditEventTimesModal } from "../modals/edit_times";
import { EventTimes } from "../data/types/report";
import { Chip } from "../components/chip";
import { FaClock } from "react-icons/fa";

export function EditableTime() {
  const [open, setOpen] = useState<boolean>(false);

  const { draftReport, editDraft } = useFormTools();

  function onApplyTimes(value: EventTimes) {
    editDraft({ path: "eventTimes", value });
  }

  const defaultValues: EventTimes = {
    startTime: draftReport!.reportingDuration.startTime,
    endTime: draftReport!.reportingDuration.endTime,
  };

  return (
    <>
      {draftReport && (
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
              {dayjs(draftReport.reportingDuration.startTime).format("h:mm a - ") +
                dayjs(draftReport.reportingDuration.endTime).format("h:mm a")}
            </Typography>
          </Chip>
        </>
      )}
    </>
  );
}
