import { useState } from "react";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { EditableLabelMultiline } from "../components/editable_label/editable_multiline_label";

export function EditableDescription() {
  const { draftEvent, editDraft } = useNotatorTools();
  const [stagedDescription, setStagedDescription] = useState<string>(
    draftEvent!.description
  );

  return (
    <EditableLabelMultiline
      value={stagedDescription}
      onChange={(v) => setStagedDescription(v)}
      onBlur={(v) => editDraft("description", v)}
      height="2.5rem"
      px=".5rem"
    />
  );
}
