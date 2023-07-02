import { Box, Grid, Typography } from "@mui/material";
// @ts-ignore
import { ReactComponent as Pfp } from "../svgs/pfp.svg";
import { utils } from "../utils/getGutterWidth";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";

function Home() {
  const { currentScreenSize, isMobile } = useBreakpointHelper();

  return (
    <Grid container sx={{ paddingX: utils.getGutterWidth(currentScreenSize), paddingTop: "4rem" }}>
      <Grid
        item
        xs={12}
        lg={8}
        sx={{
          maxWidth: "55rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Box>
            <Pfp />
          </Box>

          <Box>
            <Typography variant="h4" gutterBottom>
              Hi! I'm Steven Bennett
            </Typography>
            <Typography variant="body1">Developer, architect, learner, team player</Typography>
          </Box>
        </Box>

        <Typography sx={{ marginTop: "6rem" }} variant="body1">
          I’m glad you’re here. I am a passionate learner and developer that takes purpose in acquiring new
          knowledge and skills. Equally, I thrive on opportunities to share that knowledge with my team and
          company where possible. I take a proactive & solutions-oriented approach to development by
          contributing to code, architectural decisions and the potential for innovative new processes at
          every chance in order to push the boundaries of what is perceived possible. I embrace challenge,
          and see each one as an opportunity for new <strong>knowledge</strong>, <strong>innovation</strong>
          , and <strong>collaboration</strong>.
        </Typography>
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="h4" gutterBottom>
          My Skills
        </Typography>
        <Box component="ul" sx={{ display: "flex" }}>
          <li>React</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Box sx={{ maxWidth: "55rem" }}>
          <Box sx={{ display: "flex", gap: "5rem" }}>
            <Box sx={{ width: isMobile ? "169px" : "239px" }}></Box>
            <Box sx={{ display: "flex", alignItems: "center" }}></Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
