import { Typography } from "@mui/material";
import { useState } from "react";
import { useNotatorTools } from "../tools/use_notator_tools";
import { IoLocationSharp } from "react-icons/io5";
import { EditLocationModal } from "../modals/edit_location";
import { Chip } from "../components/chip";

export function EditableLocation() {
  const [open, setOpen] = useState<boolean>(false);
  const { draftReport: draftEvent, editDraft } = useNotatorTools();

  return (
    <>
      {draftEvent && (
        <>
          <EditLocationModal
            defaultValue={draftEvent.location}
            open={open}
            onClose={() => setOpen(false)}
            onApply={(value) => editDraft({ path: "location", value })}
          />
          <Chip onClick={() => setOpen(true)}>
            <IoLocationSharp />
            <Typography variant="body2">{draftEvent.location}</Typography>
          </Chip>
        </>
      )}
    </>
  );
}
