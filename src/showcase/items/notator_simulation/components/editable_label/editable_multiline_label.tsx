import { useState } from "react";
import { InputBase, SxProps, Box, Typography } from "@mui/material";
import { useEditableControlledVisbilityStyling } from "./use_styling";
import truncateTextPretty from "../../../../../utils/truncate_text_pretty";

interface RequiredProps {
  value: string;
}
interface OptionalProps {
  onChange?: (v: string) => void;
  onBlur?: (v: string) => void;
  onClick?: () => void;
  placeholder?: string;
}
interface StyleProps {
  height: string;
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
      fontSize: ".8rem",
      fontVariationSettings: "'slnt' 10",
      fontWeight: 500,
    } as SxProps,
  };

  function handleClick() {
    setInputHasBeenFocusedOn(true);
    props.onClick?.call(null);
  }

  const [inputHasBeenFocused, setInputHasBeenFocusedOn] =
    useState<boolean>(false);

  const visibilitySx = useEditableControlledVisbilityStyling({
    inputHasBeenFocused,
    uid: "title",
  });

  const textStyle: SxProps = {
    fontFamily: "Roboto",
    letterSpacing: "-.5px",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    color: "#000B",
    fontSize: ".9rem",
    fontWeight: 400,
  };

  return (
    <Box
      sx={{
        height: `calc(${props.height} + 1px)`,
        position: "relative",
        ...visibilitySx.containerStyle,
        ".MuiInputBase-root": {
          padding: 0,
          margin: 0,
        },
      }}
      onClick={() => handleClick()}
      onBlur={() => setInputHasBeenFocusedOn(false)}
    >
      <InputBase
        placeholder={placeholder.text}
        multiline
        value={props.value}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e.target.value);
          }
        }}
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
              ...(placeholder.typographyStyle as any),
            },
          },
          ".MuiInputBase-inputMultiline": {
            height: props.height + "!important",
          },
          position: "absolute",
          top: 0,
          left: 0,
          padding: 0,
          margin: 0,
        }}
      />
      <Box id={visibilitySx.typographyID}>
        <Typography
          variant="body2"
          sx={{
            ...textStyle,
            position: "absolute",
            top: 0,
            left: 0,
            px: props.px,
            ...(props.value === "" && {
              pt: "1px",
              opacity: 0.4,
              ...placeholder.typographyStyle,
            }),
          }}
        >
          {props.value === ""
            ? placeholder.text
            : truncateTextPretty(props.value, 100)}
        </Typography>
      </Box>
    </Box>
  );
}
