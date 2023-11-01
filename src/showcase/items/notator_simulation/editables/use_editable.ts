import { SxProps } from "@mui/material";

export function useEditableVisibilityStyling(props: {
  inputHasBeenFocused: boolean;
}): EditableLabelStyling {
  const { inputHasBeenFocused: inputHasBeenFocusedOn } = props;
  const outlineSX: SxProps = {
    outline: "1px solid #0002",
    borderRadius: "4px",
  };
  const inputID = "InputID";
  const typographyID = "TypographyID";
  const styles = {
    ["#" + inputID]: inputHasBeenFocusedOn
      ? { display: "block", ...outlineSX }
      : { display: "none" },
    ["#" + typographyID]: inputHasBeenFocusedOn
      ? { display: "none" }
      : { display: "block" },
    ":hover": {
      ["#" + inputID]: {
        display: "flex",
        ...outlineSX,
      },
      ["#" + typographyID]: { display: "none" },
    },
  };

  return { inputID, typographyID, containerStyle: styles };
}

interface EditableLabelStyling {
  containerStyle: SxProps;
  inputID: string;
  typographyID: string;
}
