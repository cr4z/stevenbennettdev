import {
  ClickAwayListener,
  InputBase,
  Paper,
  SxProps,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import Box from "../../fortitude/components-dev/BoxExtended";
import { useState } from "react";

const notatorTheme = createTheme({
  palette: {
    background: {
      default: "#D3DBE2",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      },
    },
  },
  typography: {
    h4: { fontFamily: "Lato" },
  },
});

export default function NotatorSimulationContextWrapper() {
  return (
    <ThemeProvider theme={notatorTheme}>
      <NotatorSimulation />
    </ThemeProvider>
  );
}

function NotatorSimulation() {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        bgcolor: palette.background.default,
        width: "100%",
        height: "100%",
        padding: "16px",
      }}
    >
      <Paper sx={{ height: "6rem", width: "100%" }}>
        <EditableTitle />
        <Box sx={{ display: "flex" }}>
          <EditableTime />
          <EditableLocation />
        </Box>
        <EditableDescription />
      </Paper>
    </Box>
  );
}

function EditableTitle() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Click to edit me!");

  const handleTypographyClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleFinishEditing = () => {
    setIsEditing(false);
  };

  const letterSpacing = "0px";
  const textFieldTypographySharedSXOutline: SxProps = {
    outline: "1px solid #0002",
    borderRadius: "4px",
  };
  const textFieldTypographySharedSX: SxProps = {
    height: "100%",
    width: "100%",
    padding: "4px",
    fontFamily: "Lato",
    fontSize: "2.125rem",
    letterSpacing,
  };

  return (
    <ClickAwayListener onClickAway={handleFinishEditing}>
      <Box sx={{ padding: "1rem", height: "5rem" }}>
        {isEditing ? (
          <InputBase
            value={text}
            onChange={handleInputChange}
            onBlur={handleFinishEditing}
            autoFocus
            sx={{
              ...textFieldTypographySharedSXOutline,
              ...textFieldTypographySharedSX,
            }}
          />
        ) : (
          <Box
            sx={{
              ...textFieldTypographySharedSX,
              ":hover": textFieldTypographySharedSXOutline,
              padding: "4px",
              cursor: "text",
              display: "flex",
              alignItems: "center",
            }}
            onClick={handleTypographyClick}
          >
            <Typography sx={{ letterSpacing }} variant="h4">
              {text}
            </Typography>
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
}
function EditableTime() {
  return <></>;
}
function EditableLocation() {
  return <></>;
}
function EditableDescription() {
  return <></>;
}
