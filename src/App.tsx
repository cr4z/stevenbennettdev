import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useBreakpointHelper } from "./hooks/useBreakpointHelper";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

const App = () => {
  const { isMobile } = useBreakpointHelper();

  // <Box sx={{ paddingX: utils.getGutterWidth(currentScreenSize), paddingY: "4rem" }}></Box>

  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
