import { Typography } from "@mui/material";
import { useState } from "react";
import { useFormTools } from "../tools/use_form_tools";
import { IoLocationSharp } from "react-icons/io5";
import { EditLocationModal } from "../modals/edit_location";
import { Chip } from "../components/chip";

export function EditableLocation() {
  const [open, setOpen] = useState<boolean>(false);
  const { draftReport, editDraft } = useFormTools();

  return (
    <>
      {draftReport && (
        <>
          <EditLocationModal
            defaultValue={draftReport.location}
            open={open}
            onClose={() => setOpen(false)}
            onApply={(value) => editDraft({ path: "location", value })}
          />
          <Chip onClick={() => setOpen(true)}>
            <IoLocationSharp />
            <Typography variant="body2">{draftReport.location}</Typography>
          </Chip>
        </>
      )}
    </>
  );
}
