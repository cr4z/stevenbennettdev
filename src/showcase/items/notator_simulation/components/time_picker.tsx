import { useState, useEffect, forwardRef } from "react";
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
  defaultValue?: Dayjs;
}
export type TimeAutocompleteProps = RequiredProps & OptionalProps;

export const TimeAutocomplete = forwardRef<
  HTMLInputElement,
  TimeAutocompleteProps
>((props, ref) => {
  const defaultValue = props.defaultValue
    ? props.defaultValue?.format("hh:mm A")
    : dayjs().format("hh:mm A");

  const [value, setValue] = useState<string>(defaultValue);
  const [invalid, setInvalid] = useState<boolean>(false);

  useEffect(() => {
    if (timeUtils.isValidTime(value) || value === "") {
      setInvalid(false);
      props.onChange(dayjs(value, "hh:mm A"));
    } else {
      setInvalid(true);
    }
  }, [value]);

  return (
    <Autocomplete
      id="time-autocomplete"
      options={timeUtils.options}
      value={value}
      freeSolo
      onInputChange={(e, newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => (
        <TextField
          error={invalid}
          {...params}
          label={props.label ?? "Select Time"}
          variant="outlined"
          inputRef={ref}
        />
      )}
    />
  );
});
