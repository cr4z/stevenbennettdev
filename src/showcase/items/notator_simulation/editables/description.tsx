import { useState } from "react";
import { useNotatorTools } from "../tools/use_notator_tools";
import { EditableLabelMultiline } from "../components/editable_label/editable_multiline_label";
import { EditDesriptionModal } from "../modals/edit_description";

export function EditableDescription() {
  const { draftEvent } = useNotatorTools();
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
