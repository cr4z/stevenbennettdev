import { forwardRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs, { Dayjs } from "dayjs";
import timeUtils from "../utils/time";

const formatTimeValue = (time: Dayjs) => time.format("h:mm A");
const parseTimeValue = (newValue: string) => dayjs(newValue, "h:mm A");
const isTimeValueValid = (newValue: string) => timeUtils.isValidTime(newValue);

interface RequiredProps {
  onChange: (v: Dayjs) => void;
  value: Dayjs;
}
interface OptionalProps {
  label?: string;
}
export type TimeAutocompleteProps = RequiredProps & OptionalProps;

export const TimeAutocomplete = forwardRef<
  HTMLInputElement,
  TimeAutocompleteProps
>((props, ref) => {
  const { value, onChange, label } = props;

  const [invalid, setInvalid] = useState<boolean>(false);

  function handleInputChange(v: string) {
    const newTime = parseTimeValue(v);
    const isValid = isTimeValueValid(v);

    if (isValid) {
      onChange(newTime);
    }

    setInvalid(!isValid);
  }

  return (
    <Autocomplete
      id="time-autocomplete"
      fullWidth
      options={timeUtils.options}
      value={formatTimeValue(value)}
      freeSolo
      onInputChange={(_e, v) => handleInputChange(v)}
      renderInput={(params) => (
        <TextField
          {...params}
          error={invalid}
          label={label ?? "Select Time"}
          variant="outlined"
          inputRef={ref}
        />
      )}
    />
  );
});
