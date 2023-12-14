import { IconButton } from "@mui/material";
import { SnackbarKey, useSnackbar } from "notistack";
import { RiCloseFill } from "react-icons/ri";

function SnackbarCloseButton(props: { snackbarKey: SnackbarKey }) {
  const { snackbarKey } = props;
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton sx={{ color: "#FFFD" }} onClick={() => closeSnackbar(snackbarKey)}>
      <RiCloseFill />
    </IconButton>
  );
}

export default SnackbarCloseButton;
