import { SxProps } from "@mui/material";

interface EditableControlledVisibilityStyling {
  containerStyle: SxProps;
  inputID: string;
  typographyID: string;
}

export function useEditableControlledVisbilityStyling(props: {
  inputHasBeenFocused: boolean;
  uid: string;
}): EditableControlledVisibilityStyling {
  const { inputHasBeenFocused, uid } = props;

  const inputID = "InputID_" + uid;
  const typographyID = "TypographyID_" + uid;

  const outlineSX: SxProps = {
    outline: "1px solid #0002",
    borderRadius: "4px",
  };
  const containerStyle = {
    ["#" + inputID]: inputHasBeenFocused
      ? { display: "block", ...outlineSX }
      : { display: "none" },
    ["#" + typographyID]: inputHasBeenFocused
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

  return { inputID, typographyID, containerStyle };
}
