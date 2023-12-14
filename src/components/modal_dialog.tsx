import { Box, Dialog, Typography } from "@mui/material";
import { SBDBack } from "../sbd_development_kit/components/button_back";

export function ModalDialog(props: {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <Dialog fullWidth onClose={props.onClose} open={props.open}>
      <SBDBack onClick={props.onClose} />
      {props.title && (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h5">{props.title}</Typography>
        </Box>
      )}
      <Box sx={{ padding: "1rem" }}>{props.children}</Box>
    </Dialog>
  );
}
