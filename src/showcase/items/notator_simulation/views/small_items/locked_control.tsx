import {
  Box,
  Checkbox,
  InputBase,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { CargoItem } from "./cargo_item_type";
import { useState } from "react";

const SX_TOGGLE_GROUP = {
  unitSize: 1.75,
};

export default function LockedControl(props: {
  cargoItem: CargoItem;
  onChange: (ci: CargoItem) => void;
  onRemoveSelfFromLedger: () => void;
  onAddSelfToLedger: (increments?: number) => void;
}) {
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
    if (v < 0) return;

    if (increments === v) return;

    if (v === 0) {
      props.onRemoveSelfFromLedger();
      return;
    }

    if (increments === 0 && v > 1) {
      props.onAddSelfToLedger(v);
      return;
    }

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
            display: "none",
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
          sx={{
            position: "absolute",
            right: 1,
            bottom: 1,
            width: SX_TOGGLE_GROUP.unitSize * 3 + "rem",
            height: SX_TOGGLE_GROUP.unitSize + "rem",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("intercepted");
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            id="show"
          >
            <ToggleGroup
              increments={increments}
              handleValueChange={handleValueChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function ToggleGroup(props: {
  increments: number;
  handleValueChange: (v: number) => void;
}) {
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
      }}
    >
      <Box
        onClick={() => setCachedValue(cachedValue - 1)}
        sx={buttonStyle}
        borderRight={borderLineStyle}
      >
        -
      </Box>

      <InputBase
        sx={inputStyle}
        value={cachedValue}
        onChange={(e) => setCachedValue(+e.target.value)}
      />

      <Box onClick={() => setCachedValue(cachedValue + 1)} sx={buttonStyle}>
        +
      </Box>
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

  return [cachedValue, setCachedValue];
}
