import { Box, TextField, useTheme } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

function Input(props: { icon?: "default" | "search" }) {
  const thm = useTheme();

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Box sx={{ color: "white", }}>
        <AiOutlineSearch />
      </Box>
      <TextField
        size="small"
        placeholder="Search projects..."
        sx={{
          bgcolor: thm.palette.grey[700],
          // fix border radius
          borderRadius: "4px",
          overflow: "hidden",
          // change border color
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: thm.palette.grey[600],
          },
        }}
      />
    </Box>
  );
}

export default Input;
