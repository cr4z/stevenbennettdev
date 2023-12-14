import { IconButton } from "@mui/material";
import { RiCloseFill } from "react-icons/ri";

export function SBDClose(props: { onClick: () => void }) {
  return (
    <IconButton sx={{ color: "#FFFD" }} onClick={props.onClick}>
      <RiCloseFill />
    </IconButton>
  );
}
