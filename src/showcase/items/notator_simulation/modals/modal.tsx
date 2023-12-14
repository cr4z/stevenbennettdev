import { Box, IconButton, SxProps } from "@mui/material";
import { GrClose } from "react-icons/gr";

export type NotatorSimulationModalToggleProps = {
  open: boolean;
  onClose: () => void;
};

export type NotatorSimulationModalProps = NotatorSimulationModalToggleProps & {
  children: React.ReactNode;
  onFocusReady?: () => void;
  sx?: SxProps;
  minWidth?: "xl" | "lg" | "md" | "sm";
};

export function NotatorSimulationModal(props: NotatorSimulationModalProps) {
  function getMaxWidth(): string {
    switch (props.minWidth) {
      case "xl":
        return "60rem";
      case "lg":
        return "40rem";
      case "md":
        return "30rem";
      case "sm":
        return "20rem";
    }

    return "20rem";
  }

  const maxWidth = getMaxWidth();

  return (
    <Box
      key={`notator-simulation-modal`}
      onClick={() => {
        props.onClose();
      }}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        visibility: props.open ? "visible" : "hidden",
        bgcolor: props.open ? "#0004" : "#0000",
        transition: "background-color .25s ease",
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === "background-color") {
          if (props.open && props.onFocusReady) {
            // Call the onTransitionEnd callback only when the modal is opened
            props.onFocusReady();
          }
        }
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          bgcolor: "white",
          borderRadius: ".5rem",
          zIndex: 2,
          width: "calc(100% - 2rem)",
          maxWidth: maxWidth,
          maxHeight: "calc(100% - 4rem)",
          position: "relative",
          transform: props.open ? "scale(1)" : "scale(.98)",
          transition: "transform .25s ease",

          ...props.sx,
        }}
      >
        <Box sx={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          <IconButton onClick={props.onClose} size="small">
            <GrClose />
          </IconButton>
        </Box>

        {props.children}
      </Box>
    </Box>
  );
}
