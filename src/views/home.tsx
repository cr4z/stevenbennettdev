import { Box, Grid, Typography } from "@mui/material";
// @ts-ignore
import { ReactComponent as Pfp } from "../svgs/pfp.svg";
import { utils } from "../utils/getGutterWidth";
import { useBreakpointHelper } from "../hooks/useBreakpointHelper";
import { BiLogoReact, BiLogoTypescript, BiLogoRedux, BiLogoGithub } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAzuredevops, SiFigma } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

function Home() {
  const { currentScreenSize, isMobile, isGreaterEqual: isGreaterThanEqualTo } = useBreakpointHelper();

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
            flexDirection: isGreaterThanEqualTo("md") ? "row" : "column",
          }}
        >
          <Box>
            <Pfp />
          </Box>

          <Box>
            <Typography variant="h4" gutterBottom>
              Hi! I'm Steven Bennett
            </Typography>
            <Typography
              variant="body1"
              sx={{ width: "100%", textAlign: isGreaterThanEqualTo("md") ? "left" : "center" }}
            >
              Developer, architect, learner, team player
            </Typography>
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
          <Skill name="React" icon={<BiLogoReact />} />
          <Skill name="TypeScript" icon={<BiLogoTypescript />} />
          <Skill name="Redux" icon={<BiLogoRedux />} />
          <Skill name="Next.js" icon={<TbBrandNextjs />} strokeWidth="1px" />
        </Box>
        <Typography variant="body1">Extra</Typography>
        <Box component="ul" sx={{ display: "flex", gap: ".5rem" }}>
          <Skill name="Github" smaller icon={<BiLogoGithub />} />
          <Skill name="Figma" smaller icon={<SiFigma />} />
          <Skill name="DevOps" smaller icon={<VscAzureDevops />} />
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

function Skill(props: { name: string; icon: React.ReactNode; strokeWidth?: string; smaller?: boolean }) {
  return (
    <Box component="li" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="body1">{props.name}</Typography>
      <Box
        sx={{
          svg: {
            width: props.smaller ? "2.5rem" : "3rem",
            height: props.smaller ? "2.5rem" : "3rem",
            color: "white",
            ...(props.strokeWidth && { strokeWidth: props.strokeWidth }),
          },
        }}
      >
        {props.icon}
      </Box>
    </Box>
  );
}

export default Home;
