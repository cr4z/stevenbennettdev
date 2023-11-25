import { Box, Checkbox, TextField, Tooltip } from "@mui/material";
import { useState, useEffect } from "react";
import { OtherField, OtherFieldStatus } from "./other_field";
import { useNotatorTools } from "../../tools/use_notator_tools";
import { MESSAGES_OTHER_VALIDATION } from "../../messages/other_validation";

const BLANK_OTHER = {
  name: "",
  status: { savable: false, userFeedback: "" },
};

export default function UnlockedControls() {
  const { warehouseProfile, editDraft, draftReport } = useNotatorTools();

  const [otherFields, setOtherFields] = useOtherFields();

  function handleOtherFieldChange(of: OtherField, i: number) {
    setOtherFields((currentFields: OtherField[]): OtherField[] => {
      let updatedFields = [...currentFields];
      const fieldIsEmpty = of.name.length === 0;
      const validatedOtherField = validateOtherField(of);

      // Update or remove the field based on its content
      if (fieldIsEmpty && currentFields.length > 1) {
        updatedFields = updatedFields.filter((_, _i) => _i !== i);
      } else {
        updatedFields[i] = validatedOtherField;
        // Add a blank field if necessary
        if (updatedFields[updatedFields.length - 1].name !== "") {
          updatedFields.push(BLANK_OTHER);
        }
      }

      return updatedFields;
    });
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
      status.userFeedback = MESSAGES_OTHER_VALIDATION.itemExistsInDefaults;
      return { name, status };
    }

    const itemExistsInCustom = Boolean(
      draftReport?.customItemLedger.smallItems.find(
        (_name) => _name.toLowerCase() === name.toLowerCase()
      )
    );
    if (itemExistsInCustom) {
      status.userFeedback = MESSAGES_OTHER_VALIDATION.itemExistsInCustom;
      return { name, status };
    }

    status.savable = true;
    return { name, status };
  }

  function editDraftWithSavableOtherFields() {
    const savable = otherFields.filter((of) => of.status.savable);
    const savableNames = savable.map((s) => s.name);
    editDraft({ path: "customItemLedger.smallItems", value: savableNames });

    console.log(savableNames);
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
              onChange={(_of) => handleOtherFieldChange(_of, i)}
              onBlur={() => editDraftWithSavableOtherFields()}
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

/**
 * Manages the other field state. This will reset for any refetch condition, particularly saving.
 */
function useOtherFields(): [
  otherFields: OtherField[],
  setOtherFields: React.Dispatch<React.SetStateAction<OtherField[]>>
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
