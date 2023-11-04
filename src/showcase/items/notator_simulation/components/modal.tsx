import { Box } from "@mui/material";

export function NotatorSimulationModal(props: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onTransitionEnd?: () => void;
}) {
  return (
    <Box
      onClick={() => {
        props.onClose();
      }}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "#0004",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        opacity: props.open ? 1 : 0, // Use opacity for fade-in and fade-out
        visibility: props.open ? "visible" : "hidden", // Use visibility to actually hide the element
        transition: "opacity 0.1s ease, visibility 0.1s ease", // Add transition to opacity and visibility
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName === "opacity") {
          if (props.open && props.onTransitionEnd) {
            // Call the onTransitionEnd callback only when the modal is opened
            props.onTransitionEnd();
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
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
