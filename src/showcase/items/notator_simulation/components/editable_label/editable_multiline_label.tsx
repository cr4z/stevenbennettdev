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
interface OptionalProps {
  placeholder?: string;
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

type EditableLabelProps = RequiredProps & OptionalProps & StyleProps;

export function EditableLabelMultiline(props: EditableLabelProps) {
  const placeholder = {
    text: props.placeholder ?? "Type something...",
    typographyStyle: {
      color: "#000",
      fontFamily: "Inter",
      fontStyle: "italic",
      fontVariationSettings: "'slnt' 10",
      fontWeight: 500,
    } as SxProps,
  };

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
    alignItems: "flex-start",
    pt: "2px",
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
        placeholder={placeholder.text}
        multiline
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
            "&::placeholder": {
              pt: "1px",
              ...(placeholder.typographyStyle as any),
            },
          },
          ".MuiInputBase-inputMultiline": {
            height: props.height + "!important",
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
            ...(props.value === "" && {
              opacity: 0.4,
              ...placeholder.typographyStyle,
            }),
          }}
        >
          {props.value === "" ? placeholder.text : props.value}
        </Typography>
      </Box>
    </Box>
  );
}
