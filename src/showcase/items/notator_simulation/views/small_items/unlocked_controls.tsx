import { Box, Checkbox, TextField, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { OtherField, OtherFieldStatus } from "./other_field";
import { useNotatorTools } from "../../tools/use_notator_tools";

const BLANK_OTHER = {
  name: "",
  status: { savable: false, userFeedback: "" },
};

export default function UnlockedControls() {
  const { warehouseProfile } = useNotatorTools();

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
    const savable = otherFields.filter((of) => of.status.savable);

    console.log(savable);
  }

  function validateOtherField(of: OtherField): OtherField {
    const { name } = of;
    let status: OtherFieldStatus = { savable: false, userFeedback: "" };

    if (of.name === "") {
      return { name, status };
    }

    const itemExistsInDefaults = Boolean(
      warehouseProfile?.defaultItemsLedger.smallItems.find(
        (defaultName) => defaultName.toLowerCase() === name.toLowerCase()
      )
    );
    if (itemExistsInDefaults) {
      status.userFeedback = "Custom item already exists, this will not save!";
      return { name, status };
    }

    status.savable = true;
    return { name, status };
  }

  return (
    <>
      {otherFields.map((of, i) => (
        <Tooltip
          open={of.status.userFeedback !== ""}
          title={of.status.userFeedback}
        >
          <div>
            <UnlockedControl
              key={i}
              otherField={of}
              onChange={(_of) => handleFieldChange(_of, i)}
              onBlur={() => handleDataOperation()}
            />
          </div>
        </Tooltip>
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
        error={status.userFeedback !== ""}
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
