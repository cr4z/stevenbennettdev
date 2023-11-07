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
import { useState } from "react";

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

function SegmentButton(props: { text: string }) {
  const { palette } = useTheme();

  return (
    <SegmentBase>
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
            <Box
              sx={{
                width: ".5rem",
                height: ".5rem",
                borderRadius: 999,
                bgcolor: palette.success.main,
              }}
            />
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

function AddSegmentButton() {
  return (
    <SegmentBase>
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

function SelectableSegment(props: { text: string }) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <SegmentBase onClick={() => setIsSelected(!isSelected)}>
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
            <Checkbox checked={isSelected} />
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

function RemoveModeButtons(props: {
  onBack: () => void;
  onRemove: () => void;
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
          gap: ".3rem",
          ":hover": {
            bgcolor: "#454545",
          },
        }}
        onClick={() => props.onBack()}
      >
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
      </ButtonBase>
      <Button
        fullWidth
        variant="contained"
        color="error"
        sx={{
          boxShadow: "unset",
          bgcolor: palette.error.main + "CC",
          svg: { minWidth: "1.2rem", minHeight: "1.2rem", mb: "2px" },
          whiteSpace: "nowrap",
          gap: "4px",
        }}
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
