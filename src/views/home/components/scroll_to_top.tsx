import { Box, Typography, useTheme } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";

export function ScrollToTop(props: { onClick: () => void; useYMargin?: boolean }) {
  const { palette } = useTheme();

  const height = "3rem";

  return (
    <Box
      sx={{
        display: "flex",
        ...(props.useYMargin && { my: "6rem" }),
      }}
    >
      <Box
        onClick={() => props.onClick()}
        sx={{
          cursor: "pointer",
          bgcolor: palette.text.primary,
          width: height,
          height: height,
          borderTopLeftRadius: "100%",
        }}
      />

      <Box
        onClick={() => props.onClick()}
        sx={{
          cursor: "pointer",
          bgcolor: palette.text.primary,
          width: "20rem",
          maxWidth: "60vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          svg: {
            color: palette.common.black,
          },
        }}
      >
        <IoIosArrowUp />
        <Typography
          sx={{
            color: palette.getContrastText(palette.common.white),
            fontWeight: 500,
            mx: ".5rem",
          }}
        >
          Scroll to top
        </Typography>
        <IoIosArrowUp />
      </Box>

      <Box
        onClick={() => props.onClick()}
        sx={{
          cursor: "pointer",
          bgcolor: palette.text.primary,
          width: height,
          height: height,
          borderBottomRightRadius: "100%",
        }}
      />
    </Box>
  );
}
