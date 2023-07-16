import { Controller, FieldValues, UseFormWatch, UseFormSetValue, Path, PathValue } from "react-hook-form";
import { TextField, MenuItem, FormControl, Menu } from "@mui/material";
import { XNGErrorFeedback } from "./_error";
import Box from "../components-dev/BoxExtended";
import { useEffect, useState } from "react";

export type IXNGFormSelect<T extends FieldValues, V> = {
  control: any;
  name: Path<T>;
  items: V[];
  label: string;
  defaultValue?: V;
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
  useError?: { message: string | undefined };
  getOptionLabel: (option: V) => string;
  getOptionCallback?: (option: V) => void;
};

export function XNGFormSelect<T extends FieldValues, V>(props: IXNGFormSelect<T, V>) {
  // Basic handlers
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Everything is controlled by one data point, the "mainValue" field.
  // "mainValue" controls both the RHF value and the UI value
  // "mainValue" controls RHF through a useEffect change listener, while the UI label is always derived

  const [mainValue, setMainValue] = useState<V>(props.defaultValue ?? props.items[0]);

  // mainValue change listener
  useEffect(() => {
    props.setValue(props.name as Path<T>, mainValue as PathValue<T, Path<T>>);
  }, [mainValue]);

  // UI Value get handlers
  function getDefaultUIValue() {
    if (props.defaultValue) {
      return props.getOptionLabel(props.defaultValue);
    } else {
      return props.getOptionLabel(props.items[0]);
    }
  }
  function getUIValue() {
    return props.getOptionLabel(mainValue);
  }

  const _ = (
    <Controller
      control={props.control}
      name={props.name}
      render={() => (
        <FormControl fullWidth>
          <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
            <TextField
              fullWidth
              size="small"
              select
              sx={{ pointerEvents: "none" }}
              label={props.label}
              defaultValue={getDefaultUIValue()}
              value={getUIValue()}
            >
              {props.items.map((item, i) => {
                return (
                  <MenuItem key={i} value={props.getOptionLabel(item)}>
                    {props.getOptionLabel(item)}
                  </MenuItem>
                );
              })}
            </TextField>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={anchorEl !== null}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {props.items.map((item, i) => {
              return (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setMainValue(item);
                    if (props.getOptionCallback) {
                      props.getOptionCallback(item);
                    }
                  }}
                  key={i}
                  value={i}
                >
                  {props.getOptionLabel(item)}
                </MenuItem>
              );
            })}
          </Menu>
        </FormControl>
      )}
    />
  );

  return props.useError ? (
    <Box sx={{ width: "100%" }}>
      {_}
      <Box>
        <XNGErrorFeedback error={props.useError.message} />
      </Box>
    </Box>
  ) : (
    _
  );
}
