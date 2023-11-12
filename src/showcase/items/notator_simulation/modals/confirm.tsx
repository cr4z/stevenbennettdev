import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { NotatorSimulationModal } from "../components/modal";
import useActionOnEnterPressed from "../hooks/use_action_on_enter";

export interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  overrideDisplay?: {
    title?: string;
    description?: string;
    confirmText?: string;
    confirmColor?: "primary" | "error";
  };
}

function ConfirmModal(props: ConfirmModalProps) {
  function handleConfirm() {
    props.onConfirm();
    props.onClose();
  }

  useActionOnEnterPressed(() => {
    handleConfirm();
  }, [props.onConfirm]);

  return (
    <NotatorSimulationModal
      open={props.open}
      onClose={props.onClose}
      minWidth="md"
    >
      <Box sx={{ display: "flex", flexDirection: "column", p: "1rem" }}>
        <Typography
          className="noselect"
          variant="h6"
          sx={{ fontWeight: 500, color: "#000E" }}
        >
          {props.overrideDisplay?.title ?? "Confirmation"}
        </Typography>
        <Typography
          className="noselect"
          sx={{ color: "#000C", pt: ".5rem", pb: "1rem" }}
        >
          {props.overrideDisplay?.description ??
            "Are you sure you want to proceed?"}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color={props.overrideDisplay?.confirmColor ?? "primary"}
          >
            {props.overrideDisplay?.confirmText ?? "Confirm"}
          </Button>
        </Box>
      </Box>
    </NotatorSimulationModal>
  );
}

export default ConfirmModal;
