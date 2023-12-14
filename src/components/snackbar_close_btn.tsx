import { SnackbarKey, useSnackbar } from "notistack";
import { SBDClose } from "../sbd_development_kit/components/close";

function SnackbarCloseButton(props: { snackbarKey: SnackbarKey }) {
  const { snackbarKey } = props;
  const { closeSnackbar } = useSnackbar();

  return <SBDClose onClick={() => closeSnackbar(snackbarKey)} />;
}

export default SnackbarCloseButton;
