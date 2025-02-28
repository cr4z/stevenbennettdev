import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import SkillCarousel from "./skill_carousel";
import React, { useRef } from "react";
import { PiCaretDoubleRight } from "react-icons/pi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

function TitleCard() {
  return (
    <Stack sx={{ textAlign: "center", gap: "1rem", alignItems: "center" }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 100,
          mb: "-.5rem",
        }}
      >
        Steven Bennett
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontFamily: "Lato",
        }}
      >
        Full-Stack Developer
      </Typography>
      <Typography variant="body1" color="textSecondary" mb="">
        Specializing in React-based developoment, API technologies, and cloud infrastructure. Designing for
        impact.
      </Typography>

      <SkillCarouselWrapper>
        <SkillCarousel />
      </SkillCarouselWrapper>
    </Stack>
  );
}

function SkillCarouselWrapper(props: Readonly<{ children: React.ReactNode }>) {
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <Tooltip
      followCursor
      placement="right-start"
      arrow={false}
      slotProps={{ tooltip: { style: { backgroundColor: palette.grey[900] } } }}
      disableInteractive
      title={
        <Box sx={{ display: "flex", alignItems: "center", gap: ".25rem" }}>
          <span>View component's code</span>

          <motion.div
            style={{ height: ".8rem" }}
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1, times: [0, 0.75, 1], repeat: Infinity, repeatDelay: 1 }}
          >
            <PiCaretDoubleRight />
          </motion.div>
        </Box>
      }
    >
      <Box
        component="div"
        onClick={() => navigate("/portfolio/a9c3b7a8a801")}
        sx={{
          transition: "background-color .1s ease",
          p: ".5rem",
          maxWidth: "min-content",
          ":hover": {
            bgcolor: palette.primary.main + "1A",
            outline: "1px dotted " + palette.primary.main,
            borderRadius: ".25rem",
            cursor: "pointer",
          },
        }}
      >
        {props.children}
      </Box>
    </Tooltip>
  );
}

export default TitleCard;
