import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
// @ts-ignore
import { ReactComponent as Headshot } from "../svgs/headshot.svg";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { ICONS, IconRenderer } from "../design_system/icons";

function Home() {
  const { isMobile, isGreaterThanEqualTo } = useBreakpointHelper();
  const { palette } = useTheme();

  return (
    <Container maxWidth="xl">
      <Grid container sx={{ paddingTop: "4rem", paddingBottom: "10rem", display: "flex" }}>
        <Grid item xs={12} lg={8} sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth: "900px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4rem",
                flexDirection: isGreaterThanEqualTo("md") ? "row" : "column",
              }}
            >
              <Box>
                <Headshot />
              </Box>

              <Box>
                <Box
                  className="typewriter"
                  sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
                >
                  <Typography className="noselect" variant="h4" gutterBottom>
                    Hi! I'm{" "}
                    <Box
                      component="span"
                      sx={{ bgcolor: palette.primary.main, border: `1px ${palette.primary.main} solid` }}
                    >
                      Steven Bennett
                    </Box>
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ width: "100%", textAlign: isGreaterThanEqualTo("md") ? "left" : "center" }}
                >
                  Developer, architect, learner, team player
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ marginTop: "6rem" }} variant="body1">
              I’m glad you’re here. I am a passionate learner and developer that takes purpose in acquiring
              new knowledge and skills. Equally, I thrive on opportunities to share that knowledge with my
              team and company where possible. I take a proactive solutions-oriented approach to development
              by contributing to code, architectural decisions and the potential for innovative new
              processes at every chance in order to push the boundaries of what is perceived possible. I
              embrace challenge, and see each one as an opportunity for new <strong>knowledge</strong>,{" "}
              <strong>innovation</strong>, and <strong>collaboration</strong>.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "3rem",
            marginTop: isGreaterThanEqualTo("lg") ? 0 : "6rem",
          }}
        >
          <Typography variant="h4" gutterBottom>
            My Skills
          </Typography>
          <Box component="ul" sx={{ display: "flex", gap: ".5rem" }}>
            <SkillItem name="React" icon={<ICONS.React />} />
            <SkillItem name="TypeScript" icon={<ICONS.Typescript />} />
            <SkillItem name="Redux" icon={<ICONS.Redux />} />
            <SkillItem name="Next.js" icon={<ICONS.Nextjs />} strokeWidth="1px" />
          </Box>
          <Typography variant="body1" className="noselect">
            Extra
          </Typography>
          <Box component="ul" sx={{ display: "flex", gap: ".5rem" }}>
            <SkillItem smaller name="Github" icon={<ICONS.GitHub />} />
            <SkillItem smaller name="Figma" icon={<ICONS.Figma />} />
            <SkillItem smaller name="DevOps" icon={<ICONS.DevOps />} />
            {/* <SkillItem name=".NET" icon={<TbBrandCSharp />} /> */}
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
    </Container>
  );
}

function SkillItem(props: { name: string; icon: JSX.Element; strokeWidth?: string; smaller?: boolean }) {
  const { palette } = useTheme();

  return (
    <Box component="li">
      <Box
        className="noselect"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "6px",
          padding: ".5rem",
          minWidth: "74px",
        }}
      >
        <Typography mb=".5rem" variant="body1">
          {props.name}
        </Typography>
        <IconRenderer
          strokeWidth={props.strokeWidth}
          widthHeight={props.smaller ? "2.5rem" : "3rem"}
          color={palette.text.primary}
          i={props.icon}
        />
      </Box>
    </Box>
  );
}

export default Home;
