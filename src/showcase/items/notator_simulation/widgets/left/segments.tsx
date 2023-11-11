import {
  Box,
  Button,
  ButtonBase,
  Typography,
  useTheme,
  Checkbox,
} from "@mui/material";
import { NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE } from "./left";
import { PiCaretRightBold } from "react-icons/pi";
import { BsFillTrash3Fill, BsPlusCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import StatusDot from "../../components/status_dot";

const SEGMENT_SX = {
  height: "3rem",
  segmentStatusDotAndPlusButtonWrapperStyling: {
    display: "flex",
    justifyContent: "center",
    width: "3rem",
  },
};

function SegmentBase(props: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        svg: {
          color: NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE,
        },
        justifyContent: "space-between",
        borderRadius: "4px",
        overflow: "hidden",
      }}
      onClick={() => props.onClick?.call(null)}
    >
      <ButtonBase
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          height: SEGMENT_SX.height,
          ":hover": {
            bgcolor: "#454545",
          },
        }}
      >
        {props.children}
      </ButtonBase>
    </Box>
  );
}

function SegmentButton(props: { text: string; onClick: () => void }) {
  return (
    <SegmentBase onClick={props.onClick}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={SEGMENT_SX.segmentStatusDotAndPlusButtonWrapperStyling}>
            <StatusDot />
          </Box>
          <Typography
            variant="body2"
            color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}
          >
            {props.text}
          </Typography>
        </Box>
        <Box mr="1rem" sx={{ pt: ".4rem" }}>
          <PiCaretRightBold />
        </Box>
      </Box>
    </SegmentBase>
  );
}

function AddSegmentButton(props: { onClick: () => void }) {
  return (
    <SegmentBase onClick={props.onClick}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            ...SEGMENT_SX.segmentStatusDotAndPlusButtonWrapperStyling,
            svg: { width: "1.5rem", height: "1.5rem" },
          }}
        >
          <BsPlusCircle />
        </Box>

        <Typography variant="body2" color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}>
          Add event segment
        </Typography>
      </Box>
    </SegmentBase>
  );
}

function SelectableSegment(props: {
  text: string;
  onToggle: () => void;
  value: boolean;
}) {
  return (
    <SegmentBase onClick={() => props.onToggle()}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={SEGMENT_SX.segmentStatusDotAndPlusButtonWrapperStyling}>
          <Checkbox checked={props.value} />
        </Box>
        <Typography variant="body2" color={NOTATOR_LEFT_WIDGET_COLOR_SOFTWHITE}>
          {props.text}
        </Typography>
      </Box>
    </SegmentBase>
  );
}

function RemoveModeButtons(props: {
  onBack: () => void;
  onRemove: () => void;
  removeButtonDisabled: boolean;
}) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: SEGMENT_SX.height,
        gap: ".5rem",
      }}
    >
      <ButtonBase
        sx={{
          overflow: "hidden",
          borderRadius: "4px",
          minWidth: "45%",
          ":hover": {
            bgcolor: "#454545",
          },
        }}
        onClick={() => props.onBack()}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
          <Box
            sx={{
              color: "white",
              svg: { minWidth: "1.2rem", minHeight: "1.2rem" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <AiOutlineArrowLeft />
          </Box>
          <Typography variant="body2" color="#FFF">
            Go back
          </Typography>
        </Box>
      </ButtonBase>
      <Button
        disabled={props.removeButtonDisabled}
        fullWidth
        variant="contained"
        color="error"
        sx={{
          boxShadow: "unset",
          bgcolor: palette.error.main + "CC",
          svg: { minWidth: "1.2rem", minHeight: "1.2rem", mb: "2px" },
          whiteSpace: "nowrap",
          gap: "4px",
          ...(props.removeButtonDisabled && { color: "#FFF9!important" }),
        }}
        onClick={() => props.onRemove()}
      >
        <BsFillTrash3Fill />
        <span>Remove selected</span>
      </Button>
    </Box>
  );
}

const LeftWidgetOptions = {
  RemoveModeButtons,
  SelectableSegment,
  SegmentButton,
  AddSegmentButton,
};
export default LeftWidgetOptions;
