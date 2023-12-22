import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import { SBDClose } from "../../../../sbd_development_kit/components/close";
import { SBDBack } from "../../../../sbd_development_kit/components/button_back";

export default function ShowcaseModalBase(props: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeVariant?: "back" | "close";
}) {
  const { palette } = useTheme();
  const { open, onClose, children } = props;
  const closeVariant = props.closeVariant ?? "close";

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 9999,
        visibility: open ? "visible" : "hidden",
        bgcolor: open ? "#0007" : "#0000",
        transition: "visibility .25s ease, background-color .25s ease",
      }}
    >
      <Container maxWidth="md" sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          onClick={(e) => e.stopPropagation()}
          p="1rem"
          sx={{
            bgcolor: palette.background.default,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "6px",
            position: "relative",
            transform: open ? "scale(1)" : "scale(.98)",
            opacity: open ? 1 : 0,
            transition: "transform .25s ease, opacity .25s ease",
            maxWidth: "100%",
            minWidth: "14rem",
            pt: "2.5rem",
          }}
        >
          {closeVariant === "close" && (
            <Box sx={{ position: "absolute", top: ".25rem", right: ".25rem" }}>
              <SBDClose onClick={onClose} />
            </Box>
          )}
          {closeVariant === "back" && (
            <Box sx={{ position: "absolute", top: 0, left: 0 }}>
              <SBDBack onClick={onClose} />
            </Box>
          )}

          {children}
        </Box>
      </Container>
    </Box>
  );
}
