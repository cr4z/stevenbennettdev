import { Box } from "@mui/material";
import { Footer } from "../components/footer";

export function FooterLayout(props: { children: React.ReactNode }) {
  return (
    <Box>
      {props.children}
      <Footer />
    </Box>
  );
}
