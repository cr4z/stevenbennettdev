import { useState } from "react";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { EditableLabel } from "../components/editable_label/editable_label";

export function EditableTitle() {
  const { draftEvent, editDraft } = useNotatorTools();
  const [stagedTitle, setStagedTitle] = useState<string>(draftEvent!.title);

  return (
    <EditableLabel
      value={stagedTitle}
      onChange={(v) => setStagedTitle(v)}
      onBlur={(v) => editDraft("title", v)}
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
