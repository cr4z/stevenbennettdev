import { useEffect, forwardRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs, { Dayjs } from "dayjs";
import timeUtils from "../utils/time";

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

  useEffect(() => {
    // Assuming you want to check for a valid time whenever the value changes
    if (!timeUtils.isValidTime(value.format("hh:mm A"))) {
      // Handle invalid time if necessary
    }
  }, [value]);

  return (
    <Autocomplete
      id="time-autocomplete"
      options={timeUtils.options}
      value={value.format("hh:mm A")}
      freeSolo
      onInputChange={(e, newValue) => {
        const newTime = dayjs(newValue, "hh:mm A");
        if (timeUtils.isValidTime(newValue) || newValue === "") {
          onChange(newTime);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          error={!timeUtils.isValidTime(value.format("hh:mm A"))}
          label={label ?? "Select Time"}
          variant="outlined"
          inputRef={ref}
        />
      )}
    />
  );
});
