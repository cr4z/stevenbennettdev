import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
// @ts-ignore
import { ReactComponent as Headshot } from "../svgs/headshot.svg";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { ICONS, IconRenderer } from "../design_system/icons";
// @ts-ignore
import asdf from "../img/lifestyle.jpeg";

function Home() {
  const { isMobile, isGreaterThanEqualTo } = useBreakpointHelper();
  const { palette } = useTheme();

  const LIFESTYLE_IMAGE_HEIGHT = "23rem";

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: LIFESTYLE_IMAGE_HEIGHT,
          maxHeight: LIFESTYLE_IMAGE_HEIGHT,
          overflow: "hidden",
          backgroundAttachment: "fixed",
          backgroundPosition: "50% 100%",
          backgroundImage: `url(${asdf})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 204, 156, 0.6)",
            position: "absolute",
            top: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="noselect"
        >
          <Typography sx={{ ...(!isGreaterThanEqualTo("md") && { fontSize: "60px" }) }} variant="h1">
            Steven Bennett
          </Typography>
          <Typography variant="h5">Developer, architect, learner, team player</Typography>
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Grid container sx={{ paddingTop: "4rem", paddingBottom: "10rem", display: "flex" }}>
          <Grid item xs={12} xl={8} sx={{ display: "flex", justifyContent: "center" }}>
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
                    <Typography className="noselect" variant={isMobile ? "h5" : "h4"} gutterBottom>
                      Hey! Care to hear a little{" "}
                      <Box
                        component="span"
                        sx={{ bgcolor: palette.primary.main, border: `1px ${palette.primary.main} solid` }}
                      >
                        about me?
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography sx={{ marginTop: "3rem" }} variant="body1">
                Besides being an avid lover of the outdoors, I am a career developer who has began software
                engineering at 9 years old, beginning with what people refer to nowadays as a "toy
                language", Scratch. My love for software creation grew beyond Scratch quickly, turning into
                .NET development with the Unity game engine and soon web development with HTML, JavaScript
                and CSS before ultimately meeting what is now my favorite web framework: React with
                TypeScript.
              </Typography>
              <Typography sx={{ marginTop: "1rem" }} variant="body1">
                But enough backstory, let's talk professionally! I am a passionate learner and developer
                that takes purpose in acquiring new knowledge and skills. Simulataneously, I thrive on
                opportunities to share that knowledge with my team and company where possible. I take a
                proactive & solutions-oriented approach to development by contributing to code,
                architectural decisions and the potential for innovative new processes at every chance in
                order to push the boundaries of what is perceived possible. I embrace challenge, and see
                each one as an opportunity for new <strong>knowledge</strong>, <strong>innovation</strong>,
                and <strong>collaboration</strong>.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            xl={4}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "3rem",
              marginTop: isGreaterThanEqualTo("xl") ? 0 : "6rem",
            }}
          >
            <Typography className="noselect" variant="h4" gutterBottom>
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
    </>
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
