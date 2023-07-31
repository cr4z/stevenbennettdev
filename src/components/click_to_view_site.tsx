import { Box, Typography } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

export default function ClicKToViewWebsite(props: { src: string; href: string }) {
  const { isMobile } = useBreakpointHelper();

  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <Box sx={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            maxWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            filter: "brightness(50%) blur(2px)",
          }}
          component="img"
          src={props.src}
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
            variant={isMobile ? "h4" : "h3"}
            sx={{ minWidth: "28rem", display: "flex", justifyContent: "center" }}
          >
            Click to view website
          </Typography>
        </Box>
      </Box>
    </a>
  );
}
