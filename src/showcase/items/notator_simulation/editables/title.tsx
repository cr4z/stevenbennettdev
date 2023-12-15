import { useState } from "react";
import { useFormTools } from "../tools/use_form_tools";
import { EditableLabel } from "../components/editable_label/editable_label";

export function EditableTitle() {
  const { draftReport: draftEvent, editDraft } = useFormTools();
  const [stagedTitle, setStagedTitle] = useState<string>(draftEvent!.title);

  return (
    <EditableLabel
      value={stagedTitle}
      onChange={(v) => setStagedTitle(v)}
      onBlur={(value) => editDraft({ path: "title", value })}
      height="2.5rem"
      fontStyling={{
        fontSize: { fontSize: "1.2rem", variant: "h2" },
        fontFamily: "Lato",
        letterSpacing: "-.5px",
      }}
      px=".5rem"
    />
  );
}
