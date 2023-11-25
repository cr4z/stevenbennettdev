import { Box, Checkbox, TextField } from "@mui/material";
import { useState } from "react";
import { OtherField } from "./other_field";

export default function UnlockedControls() {
  const [otherFields, setOtherFields] = useState<OtherField[]>([
    createBlankOther(),
  ]);

  function createBlankOther(): OtherField {
    return { name: "", status: { unsaveable: true, userFeedback: null } };
  }

  function handleFieldChange(of: OtherField, i: number) {
    const fieldIsEmpty = of.name.length === 0;

    let _otherFields = [...otherFields];

    if (fieldIsEmpty) {
      if (otherFields.length === 1) {
        updateFieldAtIndex();
      } else {
        removeFieldAtIndex();
      }
    } else {
      updateFieldAtIndex();
      addBlankIfNeeded();
    }

    setOtherFields(_otherFields);

    // --- Helpers ---

    function updateFieldAtIndex() {
      _otherFields[i] = of;
    }

    function removeFieldAtIndex() {
      _otherFields = _otherFields.filter((_, _i) => _i !== i);
    }

    function addBlankIfNeeded() {
      if (_otherFields[_otherFields.length - 1].name !== "") {
        _otherFields.push(createBlankOther());
      }
    }
  }

  return (
    <>
      {otherFields.map((thisOF, i) => (
        <UnlockedControl
          key={i}
          otherField={thisOF}
          onChange={(of) => handleFieldChange(of, i)}
        />
      ))}
    </>
  );
}

function UnlockedControl(props: {
  otherField: OtherField;
  onChange: (updatedField: OtherField) => void;
}) {
  const { status, name } = props.otherField;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Checkbox />
      <TextField
        value={name}
        onChange={(e) => props.onChange({ name: e.target.value, status })}
        size="small"
        variant="outlined"
      />
    </Box>
  );
}
