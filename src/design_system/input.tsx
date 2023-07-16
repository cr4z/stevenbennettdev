import { Box, SxProps, TextField, useTheme } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { IconRenderer } from "./icons";

type IconVariaton = "none" | "search";

function Input(props: {
  useIcon?: IconVariaton;
  sx?: SxProps;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}) {
  const iconVariation: IconVariaton = props.useIcon ?? "none";
  const { palette } = useTheme();

  return (
    <Box
      sx={{ display: "flex", position: "relative", justifyContent: "flex-end", width: "100%", ...props.sx }}
    >
      <TextField
        onChange={props.onChange}
        fullWidth
        size="small"
        placeholder={props.placeholder}
        sx={{
          bgcolor: palette.grey[700],
          // fix border radius
          borderRadius: "4px",
          overflow: "hidden",
          // change border color
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: palette.grey[600],
          },
        }}
      />
      {iconVariation === "search" && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            marginRight: "3px",
            pointerEvents: "none",
          }}
        >
          <IconRenderer color={palette.text.primary} widthHeight="2rem" i={<AiOutlineSearch />} />
        </Box>
      )}
    </Box>
  );
}

export default Input;
