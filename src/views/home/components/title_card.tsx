import { Box } from "@mui/material";
import SkillCarousel from "./skill_carousel";

function TitleCard() {
  return (
    <Box sx={{ bgcolor: "#FFF5", height: "9rem", width: "26rem" }}>
      <SkillCarousel />
    </Box>
  );
}

export default TitleCard;
