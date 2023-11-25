import { Box, Checkbox, TextField } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { OtherField, OtherFieldStatus } from "./other_field";
import { useNotatorTools } from "../../tools/use_notator_tools";

const BLANK_OTHER = {
  name: "",
  status: { unsaveable: true, userFeedback: null },
};

export default function UnlockedControls() {
  const {
    truckerTools: { draftTrucker },
  } = useNotatorTools();

  const [otherFields, setOtherFields] = useOtherFields();

  function handleFieldChange(of: OtherField, i: number) {
    const fieldIsEmpty = of.name.length === 0;
    const validatedOtherField = validateOtherField(of);

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
      _otherFields[i] = validatedOtherField;
    }

    function removeFieldAtIndex() {
      _otherFields = _otherFields.filter((_, _i) => _i !== i);
    }

    function addBlankIfNeeded() {
      if (_otherFields[_otherFields.length - 1].name !== "") {
        _otherFields.push(BLANK_OTHER);
      }
    }
  }

  function handleDataOperation() {
    const saveable = otherFields.filter((of) => !of.status.unsaveable);

    console.log(saveable);
  }

  function validateOtherField(of: OtherField): OtherField {
    let status: OtherFieldStatus = { unsaveable: true, userFeedback: "" };
    const { name } = of;

    console.log("HEYOO");

    if (otherFields.find((of) => of.name === name)) {
      status.userFeedback = "Custom item already exists, this will not save!";
      return { name, status };
    }

    if (
      draftTrucker?.itemLedger.smallItems.find((item) => item.name === name)
    ) {
      status.userFeedback = "Custom item already exists, this will not save!";
      return { name, status };
    }

    status.unsaveable = false;
    return { name, status };
  }

  return (
    <>
      {otherFields.map((of, i) => (
        <UnlockedControl
          key={i}
          otherField={of}
          onChange={(_of) => handleFieldChange(_of, i)}
          onBlur={() => handleDataOperation()}
        />
      ))}
    </>
  );
}

function UnlockedControl(props: {
  otherField: OtherField;
  onChange: (updatedField: OtherField) => void;
  onBlur: () => void;
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
        onBlur={props.onBlur}
      />
    </Box>
  );
}

function useOtherFields(): [
  otherFields: OtherField[],
  setOtherFields: (v: OtherField[]) => void
] {
  const { refetchSwitch } = useNotatorTools();

  function getDefaultOrCachedValue(): OtherField[] {
    return [BLANK_OTHER];
  }

  const [otherFields, setOtherFields] = useState<OtherField[]>(
    getDefaultOrCachedValue()
  );

  useEffect(() => {
    setOtherFields([BLANK_OTHER]);
  }, [refetchSwitch]);

  return [otherFields, setOtherFields];
}
