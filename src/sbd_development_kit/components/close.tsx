import { IconButton } from "@mui/material";
import { RiCloseFill } from "react-icons/ri";

export function SBDClose(props: { onClick: () => void }) {
  const btnSize = "2rem";
  const iconSize = "1.625rem";

  return (
    <IconButton
      sx={{
        color: "#FFFD",
        svg: { minWidth: iconSize, minHeight: iconSize },
        maxWidth: btnSize,
        maxHeight: btnSize,
      }}
      onClick={props.onClick}
    >
      <RiCloseFill />
    </IconButton>
  );
}
