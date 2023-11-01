import {
  ClickAwayListener,
  InputBase,
  SxProps,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export function EditableTitle() {
  const [text, setText] = useState<string>("Click to edit me!");
  const [inputHasBeenFocusedOn, setInputHasBeenFocusedOn] =
    useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const inputSX: SxProps = {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    fontFamily: "Lato",
    fontSize: "1rem",
    letterSpacing: "-.5px",
    boxSizing: "unset",
  };

  const showHideStyles = useShowHide({ inputHasBeenFocusedOn });

  return (
    <Box
      height="2.5rem"
      sx={{
        position: "relative",
        ...showHideStyles,
      }}
      onClick={() => setInputHasBeenFocusedOn(true)}
      onBlur={() => setInputHasBeenFocusedOn(false)}
    >
      <InputBase
        value={text}
        onChange={handleInputChange}
        id="ShowInputOnHover"
        sx={{
          ...inputSX,
          ".MuiInputBase-input": { ...inputSX, px: ".5rem" },
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box id="HideTypographyOnHover" sx={inputSX}>
        <Typography
          variant="h5"
          sx={{
            ...inputSX,
            px: ".5rem",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

function useShowHide(props: { inputHasBeenFocusedOn: boolean }): SxProps {
  const { inputHasBeenFocusedOn } = props;
  const outlineSX: SxProps = {
    outline: "1px solid #0002",
    borderRadius: "4px",
  };

  return {
    "#ShowInputOnHover": inputHasBeenFocusedOn
      ? { display: "block", ...outlineSX }
      : { display: "none" },
    "#HideTypographyOnHover": inputHasBeenFocusedOn
      ? { display: "none" }
      : { display: "block" },
    ":hover": {
      "#ShowInputOnHover": {
        display: "flex",
        ...outlineSX,
      },
      "#HideTypographyOnHover": { display: "none" },
    },
  };
}

function EditableTime() {
  return <></>;
}
function EditableLocation() {
  return <></>;
}
function EditableDescription() {
  return <></>;
}
