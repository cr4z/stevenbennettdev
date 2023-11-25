import {
  Box,
  ButtonBase,
  Checkbox,
  InputBase,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CargoItemProps } from "./types/locked_control_props";

const SX_TOGGLE_GROUP = {
  unitSize: 1.75,
};

type UseDeleteProp = {
  useDelete?: { onDelete: () => void };
};

export type LockedControlProps = CargoItemProps & UseDeleteProp;
export default function LockedControl(props: LockedControlProps) {
  const { name, increments } = props.cargoItem;

  const { palette } = useTheme();

  function handleToggle() {
    if (increments < 1) {
      props.onAddSelfToLedger();
      return;
    }

    if (increments >= 1) {
      props.onRemoveSelfFromLedger();
      return;
    }
  }

  function handleValueChange(v: number) {
    // If the new value is the same as the current value, do nothing.
    if (increments === v) return;

    // If the new value is 0, remove the item from the ledger.
    if (v === 0) {
      props.onRemoveSelfFromLedger();
      return;
    }

    // If the current count is 0 and the new value is greater than 0, add the item to the ledger
    // and pass the value as a parameter to use in initialization.
    if (increments === 0 && v > 0) {
      props.onAddSelfToLedger(v);
      return;
    }

    // For all other cases, update the current item's count.
    props.onChange({ increments: v, name });
  }

  function getText() {
    if (increments === 0) return "";
    if (increments === 1) return " | 1 item";

    return ` | ${increments} items`;
  }

  return (
    <Box
      className="noselect"
      onClick={handleToggle}
      sx={{
        "#show": {
          display: "none",
        },
        "#hide": {
          display: "inline",
        },
        ":hover": {
          bgcolor: "#0001",
          cursor: "pointer",
          "#show": {
            display: "flex",
          },
          "#hide": {
            opacity: 0,
          },
        },
        position: "relative",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "flex-start",
        }}
      >
        <Checkbox checked={increments > 0} />
        <Box sx={{ minHeight: "min-content", py: "8px" }}>
          <Typography display="inline">{name}</Typography>
          <Typography
            display="inline"
            id="hide"
            sx={{ color: palette.info.main, display: "inline" }}
          >
            {getText()}
          </Typography>
        </Box>
        <Box
          id="show"
          sx={{
            position: "absolute",
            right: 1,
            bottom: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ToggleGroup
            increments={increments}
            handleValueChange={handleValueChange}
            useDelete={props.useDelete}
          />
        </Box>
      </Box>
    </Box>
  );
}

type ToggleGroupProps = {
  increments: number;
  handleValueChange: (v: number) => void;
} & UseDeleteProp;

function ToggleGroup(props: ToggleGroupProps) {
  const size = SX_TOGGLE_GROUP.unitSize + "rem";

  const buttonStyle: SxProps = {
    width: size,
    height: size,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      bgcolor: "#0000000B",
    },
    ":active": {
      bgcolor: "#0001",
    },
  };

  const { palette } = useTheme();

  const exButtonStyle: SxProps = {
    width: size,
    height: size,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: palette.error.dark,
    color: "#FFF",
  };

  const borderLineStyle = "solid 1px #0002";

  const inputStyle: SxProps = {
    width: size,
    height: size,
    borderRight: borderLineStyle,
    "& .MuiInputBase-input": {
      textAlign: "center",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const [cachedValue, setCachedValue] = useCachedValue({
    defaultValue: props.increments,
  });

  return (
    <Box
      onPointerOut={() => props.handleValueChange(cachedValue)}
      sx={{
        display: "flex",
        borderRadius: "4px 0 0 0",
        overflow: "hidden",
        bgcolor: "white",
        outline: borderLineStyle,
        width: SX_TOGGLE_GROUP.unitSize * (props.useDelete ? 4 : 3) + "rem",
      }}
    >
      <ButtonBase
        onClick={() => setCachedValue(cachedValue - 1)}
        sx={{ ...buttonStyle, borderRight: borderLineStyle }}
      >
        -
      </ButtonBase>

      <InputBase
        sx={inputStyle}
        value={cachedValue}
        onChange={(e) => setCachedValue(+e.target.value)}
      />

      <ButtonBase
        onClick={() => setCachedValue(cachedValue + 1)}
        sx={buttonStyle}
      >
        +
      </ButtonBase>

      {props.useDelete && (
        <ButtonBase
          onClick={() => props.useDelete?.onDelete()}
          sx={exButtonStyle}
        >
          X
        </ButtonBase>
      )}
    </Box>
  );
}

function useCachedValue(props: {
  defaultValue: number;
}): [cachedValue: number, setCachedValue: (v: number) => void] {
  const [cachedValue, _setCachedValue] = useState<number>(props.defaultValue);

  function setCachedValue(v: number) {
    if (Number.isNaN(v)) return 0;
    if (v < 0) return 0;

    _setCachedValue(v);
  }

  useEffect(() => {
    _setCachedValue(props.defaultValue);
  }, [props.defaultValue]);

  return [cachedValue, setCachedValue];
}
