import { Box, Dialog, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { SBDClose } from "./close";
import ScrollContainer from "react-indiana-drag-scroll";

export function ImageViewerDialog(props: {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}) {
  const [zoomed, setZoomed] = useState<boolean>(false);

  function StaticHeader() {
    return (
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {props.title && (
          <Box>
            <Typography className="noselect" display="inline" variant="h5" sx={{ color: "#FFF9" }}>
              Viewing:{" "}
            </Typography>
            <Typography display="inline" variant="h5">
              {props.title}
            </Typography>
          </Box>
        )}
        <SBDClose onClick={() => props.onClose()} />
      </Box>
    );
  }

  const MAX = "70rem";

  return (
    <Dialog maxWidth={false} sx={{ zIndex: 9999 }} open={props.open} onClose={() => props.onClose()}>
      <Stack p="1rem" gap="1rem">
        <StaticHeader />
        <ScrollContainer
          style={{
            height: "calc(100vh - 24rem)",
            width: `min(calc(100vw - 10rem), ${MAX})`,
          }}
          hideScrollbars={false}
        >
          <Box
            sx={{
              cursor: zoomed ? "zoom-out" : "zoom-in",
              maxWidth: zoomed ? "120rem" : "100%",
            }}
            onClick={() => setZoomed(!zoomed)}
            component="img"
            src={props.src}
          />
        </ScrollContainer>
      </Stack>
    </Dialog>
  );
}
