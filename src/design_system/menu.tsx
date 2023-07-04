import { Menu as MUIMenu, SxProps, useTheme } from "@mui/material";

function Menu(props: {
  show: boolean;
  refCurrent: HTMLDivElement | null;
  onClose: () => void;
  children: React.ReactNode;
  menuStyleOverride?: SxProps;
}) {
  const { palette } = useTheme();

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
            backdropFilter: "blur(40px)",
            bgcolor: "rgb(50, 50, 50, .3)",
            mt: ".5rem",
            borderRadius: "8px",
            border: "1px solid " + palette.grey[500],
          },
          ...props.menuStyleOverride,
        }}
      >
        {props.children}
      </MUIMenu>
    </>
  );
}

export default Menu;
