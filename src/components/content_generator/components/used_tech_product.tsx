import { FaFigma, FaReact } from "react-icons/fa";
import { IconRenderer } from "../../../design_system/icons";
import { ContentGeneratorTechProduct } from "../types/types";
import { SiMui, SiTypescript } from "react-icons/si";
import { Box, Typography } from "@mui/material";

export function UsedTechProduct(props: { product: ContentGeneratorTechProduct }) {
  const { product } = props;

  function getIcon() {
    switch (product.name) {
      case "React":
        return <IconRenderer widthHeight={iconSizeRem * 1.2 + "rem"} i={<FaReact />} />;
      case "TypeScript":
        return <IconRenderer widthHeight={iconSizeRem + "rem"} i={<SiTypescript />} />;
      case "MUI":
        return <IconRenderer widthHeight={iconSizeRem + "rem"} i={<SiMui />} />;
      case "Figjam":
        return <IconRenderer widthHeight={iconSizeRem + "rem"} i={<FaFigma />} />;
      default:
        throw new Error("Fallthrough in switch statement! Has a new tech product been introduced?");
    }
  }

  const iconCircleSizeRem = 2.5;
  const iconSizeRem = iconCircleSizeRem / 1.9;
  const GRAY_COLOR = "#FFF2";

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Box
          sx={{
            width: iconCircleSizeRem + "rem",
            height: iconCircleSizeRem + "rem",
            bgcolor: GRAY_COLOR,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {getIcon()}
        </Box>
        <Typography p={0} variant="h6">
          {product.name}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Box
          sx={{
            minWidth: iconCircleSizeRem + "rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              minWidth: "50%",
              height: "50%",
              minHeight: "50%",
              maxHeight: "50%",
              borderBottom: "2px solid " + GRAY_COLOR,
              borderLeft: "2px solid " + GRAY_COLOR,
              borderTop: "none",
              borderRight: "none",
              mr: "1px",
            }}
          />
        </Box>
        {product.content}
      </Box>
    </Box>
  );
}
