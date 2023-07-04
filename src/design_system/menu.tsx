import { Box, Menu as MUIMenu } from "@mui/material";
import { useBreakpointHelper } from "./hooks/useBreakpointHelper";

function Menu(props: {
  show: boolean;
  refCurrent: HTMLDivElement | null;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const { isMobile } = useBreakpointHelper();

  return (
    <>
      <MUIMenu
        disableScrollLock
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={props.show}
        anchorEl={props.refCurrent}
        onClose={() => props.onClose()}
        sx={{
          ".MuiList-root": { padding: 0 },
          ".MuiPaper-root": {
            backdropFilter: "blur(16px)",
            bgcolor: "rgb(164, 164, 164, .18)",
            mt: ".5rem",
            borderRadius: "8px",
            marginLeft: isMobile ? "40px" : 0,
          },
        }}
      >
        {props.children}
      </MUIMenu>
    </>
  );
}

export default Menu;
