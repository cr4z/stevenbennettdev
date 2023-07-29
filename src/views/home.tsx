/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// ts-ignores for svg imports are valid
import { Box, ButtonBase, Container, Grid, Typography, useTheme } from "@mui/material";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { ICONS, IconRenderer } from "../design_system/icons";
// @ts-ignore
import MyLifestyleShot from "../img/lifestyle_green.jpg";
// @ts-ignore
import Headshot from "../img/onemore.png";
import ParallaxHeaderLayout from "../layouts/parallax_layout";
import { useNavigate } from "react-router";

function Home2() {
  const { isMobile, isGreaterThanEqualTo } = useBreakpointHelper();
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <ParallaxHeaderLayout src={MyLifestyleShot}>
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
                  <Box
                    component="img"
                    src={Headshot}
                    sx={{ width: "15rem", borderRadius: 999, border: "6px solid " + palette.grey[700] }}
                  />
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
                engineering at 9 years old, beginning with what people refer to nowadays as a "toy language",
                Scratch. My love for software creation grew beyond Scratch quickly, turning into .NET
                development with the Unity game engine and soon web development with HTML, JavaScript and CSS
                before ultimately meeting what is now my favorite web framework: React with TypeScript.
              </Typography>
              <Typography sx={{ marginTop: "1rem" }} variant="body1">
                But enough backstory, let's talk professionally! I am a passionate learner and developer that
                takes purpose in acquiring new knowledge and skills. Simulataneously, I thrive on
                opportunities to share that knowledge with my team and company where possible. I take a
                proactive & solutions-oriented approach to development by contributing to code, architectural
                decisions and the potential for innovative new processes at every chance in order to push the
                boundaries of what is perceived possible. I embrace challenge, and see each one as an
                opportunity for new <strong>knowledge</strong>, <strong>innovation</strong>, and{" "}
                <strong>collaboration</strong>.
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
              <SkillItem onClick={() => navigate("/portfolio/2")} name="React" icon={<ICONS.React />} />
              <SkillItem
                onClick={() => navigate("/portfolio/11")}
                name="TypeScript"
                icon={<ICONS.Typescript />}
              />
              <SkillItem disabled name="Redux" icon={<ICONS.Redux />} />
              <SkillItem onClick={() => {}} name="Next.js" icon={<ICONS.Nextjs />} strokeWidth="1px" />
            </Box>
            <Typography variant="body1" className="noselect">
              Extra
            </Typography>
            <Box component="ul" sx={{ display: "flex", gap: ".5rem" }}>
              <SkillItem onClick={() => {}} smaller name="Github" icon={<ICONS.GitHub />} />
              <SkillItem disabled smaller name="Figma" icon={<ICONS.Figma />} />
              <SkillItem disabled smaller name="DevOps" icon={<ICONS.DevOps />} />
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
    </ParallaxHeaderLayout>
  );
}

function SkillItem(props: {
  name: string;
  icon: JSX.Element;
  strokeWidth?: string;
  smaller?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const { palette } = useTheme();

  return (
    <Box component="li">
      <ButtonBase
        disabled={props.disabled}
        onClick={() => props.onClick?.call(null)}
        sx={{ ":hover": { bgcolor: palette.grey[800], borderRadius: "4px", cursor: "pointer" } }}
      >
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
      </ButtonBase>
    </Box>
  );
}

export default Home2;
