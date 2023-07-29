import { Box, Typography } from "@mui/material";
// @ts-ignore
import Screenshot from "../../img/todoshredder.png";

function TodoShredder() {
  return (
    <a href={"https://www.todoshredder.com"} target="_blank" rel="noopener noreferrer">
      <Box sx={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            maxWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            filter: "brightness(50%) blur(2px)",
          }}
          component="img"
          src={Screenshot}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            className="noselect"
            variant="h3"
            sx={{ minWidth: "28rem", display: "flex", justifyContent: "center" }}
          >
            Click to view website
          </Typography>
        </Box>
      </Box>
    </a>
  );
}

export default TodoShredder;
