import { InputBase, SxProps, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEditableVisibilityStyling } from "./use_editable";

export function EditableTitle() {
  const [text, setText] = useState<string>("Click to edit me!");
  const [inputHasBeenFocused, setInputHasBeenFocusedOn] =
    useState<boolean>(false);

  /**
   * For reasons I'm unsure of, changing fontSize will cause an offset of a pixel or two if there is a mismatch between
   * typography variant's pre-defined size and the desired fontSize. This can be mitigated by adjusting the typography
   * variant accordingly.
   */
  const exactTextStyle: SxProps = {
    fontSize: "1.2rem",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontFamily: "Lato",
    letterSpacing: "-.5px",
  };

  const paddingX = ".5rem";

  const visibilitySx = useEditableVisibilityStyling({ inputHasBeenFocused });

  return (
    <Box
      sx={{
        height: "2.5rem",
        position: "relative",
        ...visibilitySx.containerStyle,
      }}
      onClick={() => setInputHasBeenFocusedOn(true)}
      onBlur={() => setInputHasBeenFocusedOn(false)}
    >
      <InputBase
        value={text}
        onChange={(e) => setText(e.target.value)}
        id={visibilitySx.inputID}
        sx={{
          ...exactTextStyle,
          ".MuiInputBase-input": {
            padding: 0,
            px: paddingX,
            margin: 0,
            boxSizing: "border-box",
            height: "100%",
          },
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box id={visibilitySx.typographyID}>
        <Typography
          variant="h2"
          sx={{
            ...exactTextStyle,
            position: "absolute",
            top: 0,
            left: 0,
            px: paddingX,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
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
