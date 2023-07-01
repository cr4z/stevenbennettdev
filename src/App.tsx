import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Container, Box, useTheme, Typography, Grid } from "@mui/material";
import { useBreakpointHelper } from "./hooks/useBreakpointHelper";
// @ts-ignore
import { ReactComponent as Pfp } from "./svgs/pfp.svg";

function Home() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Pfp />
            <Typography variant="h4" gutterBottom>
              Hi, I'm Steven Bennett
            </Typography>
            <Typography variant="body1">
              I am a highly skilled frontend developer with expertise in React and TypeScript. I have a
              passion for creating beautiful and intuitive user interfaces.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2}>
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              {/* Add more skills as needed */}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => {
  const { currentScreenSize } = useBreakpointHelper();
  const { palette } = useTheme();

  function getNavbarPaddingX() {
    switch (currentScreenSize) {
      case "xl":
        return "3rem";
      case "lg":
        return "3rem";
      case "md":
        return "3rem";
      case "sm":
        return "3rem";
      case "xs":
        return "3rem";
    }
  }

  return (
    <BrowserRouter>
      <Box
        sx={{
          bgcolor: palette.background.default,
          paddingX: getNavbarPaddingX(),
          height: "4rem",
          display: "flex",
          alignItems: "center",
          borderBottom: `1px solid ${palette.grey[500]}`,
        }}
      >
        <Typography variant="h4">Steven Bennett</Typography>
      </Box>
      <Box sx={{ bgcolor: palette.background.default }}>
        <Container sx={{ paddingTop: "3rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
};

export default App;
