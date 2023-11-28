import { useState } from "react";
import {
  InputBase,
  SxProps,
  Typography,
  TypographyVariant,
  Box,
} from "@mui/material";
import { useEditableControlledVisbilityStyling } from "./use_styling";

interface RequiredProps {
  value: string;
  onChange: (v: string) => void;
  onBlur: (v: string) => void;
}
interface StyleProps {
  height: string;
  fontStyling: {
    fontSize: { fontSize?: string; variant?: TypographyVariant };
    fontFamily?: string;
    letterSpacing?: string;
  };
  px?: string;
}

type EditableLabelProps = RequiredProps & StyleProps;

export function EditableLabel(props: EditableLabelProps) {
  const [inputHasBeenFocused, setInputHasBeenFocusedOn] =
    useState<boolean>(false);

  const visibilitySx = useEditableControlledVisbilityStyling({
    inputHasBeenFocused,
    uid: "title",
  });

  const textStyle: SxProps = {
    fontSize: props.fontStyling.fontSize.fontSize,
    fontFamily: props.fontStyling?.fontFamily,
    letterSpacing: props.fontStyling.letterSpacing,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box
      sx={{
        height: props.height,
        position: "relative",
        ...visibilitySx.containerStyle,
      }}
      onClick={() => setInputHasBeenFocusedOn(true)}
      onBlur={() => setInputHasBeenFocusedOn(false)}
    >
      <InputBase
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        id={visibilitySx.inputID}
        onBlur={(e) => {
          if (props.onBlur) {
            props.onBlur(e.target.value);
          }
        }}
        sx={{
          ...textStyle,
          ".MuiInputBase-input": {
            padding: 0,
            margin: 0,
            boxSizing: "border-box",
            height: "100%",
            px: props.px,
          },
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box id={visibilitySx.typographyID}>
        <Typography
          variant={props.fontStyling.fontSize.variant}
          sx={{
            ...textStyle,
            position: "absolute",
            top: 0,
            left: 0,
            px: props.px,
          }}
        >
          {props.value}
        </Typography>
      </Box>
    </Box>
  );
}
