import { Box, Checkbox, TextField } from "@mui/material";
import { OtherField } from "./types/other_field";

export function UnlockedControl(props: {
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
