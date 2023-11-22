import { Box, SxProps } from "@mui/material";

export function NotatorSimulationModal(props: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onFocusReady?: () => void;
  sx?: SxProps;
  minWidth?: "lg" | "md" | "sm";
}) {
  function getMaxWidth(): string {
    switch (props.minWidth) {
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
        visibility: props.open ? "visible" : "hidden", // Use visibility to actually hide the element
        bgcolor: props.open ? "#0004" : "#0000",
        transition: "background-color .1s ease", // Add transition to opacity and visibility
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === "background-color") {
          console.log("caling");
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
          ...props.sx,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}