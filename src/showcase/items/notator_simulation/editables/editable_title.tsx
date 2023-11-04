import {
  InputBase,
  SxProps,
  Typography,
  TypographyVariant,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEditableControlledVisbilityStyling as useControlledVisbilityStyling } from "./use_editable";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { useEffect } from "react";

export function EditableTitle() {
  const { draftEvent, editDraft } = useNotatorTools();

  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (!draftEvent) return;

    setText(draftEvent.title);
  }, [draftEvent]);

  const [inputHasBeenFocused, setInputHasBeenFocusedOn] =
    useState<boolean>(false);

  /**
   * For reasons I'm unsure of, changing fontSize will cause an offset of a pixel or two if there is a mismatch between
   * typography variant's pre-defined size and the desired fontSize. This can be mitigated by adjusting the typography
   * variant accordingly.
   */
  const fontSize = {
    fontSize: "1.2rem",
    variant: "h2" as TypographyVariant,
  };

  const exactTextStyle: SxProps = {
    fontSize: fontSize.fontSize,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontFamily: "Lato",
    letterSpacing: "-.5px",
  };

  const paddingX = ".5rem";

  const visibilitySx = useControlledVisbilityStyling({
    inputHasBeenFocused,
    uid: "title",
  });

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
        onBlur={(e) => {
          editDraft("title", e.target.value);
        }}
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
          variant={fontSize.variant}
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
