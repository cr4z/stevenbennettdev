import { useState } from "react";
import { useFormTools } from "../tools/use_form_tools";
import { EditableLabelMultiline } from "../components/editable_label/editable_multiline_label";
import { EditDesriptionModal } from "../modals/views/edit_description";

export function EditableDescription() {
  const { draftReport: draftEvent } = useFormTools();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <EditDesriptionModal open={open} onClose={() => setOpen(false)} />
      <EditableLabelMultiline
        placeholder="Add a description..."
        value={draftEvent!.description}
        onClick={() => setOpen(true)}
        height="2.5rem"
        px=".5rem"
      />
    </>
  );
}
