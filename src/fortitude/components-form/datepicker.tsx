import { DatePicker } from "@mui/x-date-pickers";
import { Control, Controller, FieldValues, Path, PathValue, UseFormWatch } from "react-hook-form";
import { TextField } from "@mui/material";
import Box from "../components-dev/BoxExtended";
import { XNGErrorFeedback } from "./_error";
import { Dayjs } from "dayjs";

type IXNGFormDatePicker<T extends FieldValues> = {
  control: Control<T, any>;
  name: Path<T>;
  label: string;
  defaultValue: Date;
  useError?: { message: string | undefined };
  disabled?: boolean;
  watch?: UseFormWatch<T>;
  onAfterChange?: (e: Dayjs | null) => void;
};

function XNGFormDatePicker<T extends FieldValues>(props: IXNGFormDatePicker<T>) {
  const _ = (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={
        props.defaultValue ? (props.defaultValue as PathValue<T, Path<T>>) : (null as PathValue<T, Path<T>>)
      } // forces to default to current date
      render={({ field: { value, onChange } }) => (
        <DatePicker
          onChange={(e: Dayjs | null) => {
            onChange(e as PathValue<T, Path<T>>);
            if (props.onAfterChange) {
              props.onAfterChange(e);
            }
          }}
          disabled={props.disabled}
          value={props.watch ? props.watch(props.name) : value ? value : null}
          renderInput={(params: any) => (
            <TextField value={value} fullWidth size="small" {...params} label={props.label} />
          )}
        />
      )}
    />
  );

  return props.useError ? (
    <Box>
      {_}
      <XNGErrorFeedback error={props.useError.message} />
    </Box>
  ) : (
    _
  );
}

export default XNGFormDatePicker;
