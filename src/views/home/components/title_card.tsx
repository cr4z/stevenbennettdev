import { Stack, Typography } from "@mui/material";
import SkillCarousel from "./skill_carousel";

function TitleCard() {
  return (
    <Stack sx={{ textAlign: "center", gap: "1rem" }}>
      <Stack>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 100,
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
          Multifaceted Web Specialist
        </Typography>
      </Stack>

      <SkillCarousel />
    </Stack>
  );
}

export default TitleCard;
