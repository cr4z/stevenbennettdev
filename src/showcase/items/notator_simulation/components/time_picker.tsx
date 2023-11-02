import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs, { Dayjs } from "dayjs";

const timeOptions: string[] = [];
for (let i = 0; i < 24; i++) {
  for (let j = 0; j < 60; j += 10) {
    let hour = i % 12;
    if (hour === 0) hour = 12;
    const minute = j < 10 ? `0${j}` : j;
    const suffix = i < 12 ? "AM" : "PM";
    const time = `${hour}:${minute} ${suffix}`;
    timeOptions.push(time);
  }
}

const isValidTime = (time: string) => {
  const regex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/;
  return regex.test(time);
};

interface RequiredProps {
  onChange: (v: Dayjs) => void;
  value: Dayjs;
}
interface OptionalProps {
  label?: string;
}
type Props = RequiredProps & OptionalProps;
export default function TimeAutocomplete(props: Props) {
  const [value, setValue] = useState<string>(props.value.format("hh:mm A"));
  const [invalid, setInvalid] = useState<boolean>(false);

  useEffect(() => {
    if (isValidTime(value) || value === "") {
      setInvalid(false);
      props.onChange(dayjs(value, "hh:mm A"));
    } else {
      setInvalid(true);
    }
  }, [value]);

  return (
    <Autocomplete
      id="time-autocomplete"
      options={timeOptions}
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
        />
      )}
    />
  );
}
