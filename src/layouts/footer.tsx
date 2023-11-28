import { Box } from "@mui/material";
import { Footer } from "../components/base/footer";

export function FooterLayout(props: {
  children: React.ReactNode;
  pb?: string;
  pt?: string;
}) {
  const pt = props.pt ?? "0rem";
  const pb = props.pb ?? "0rem";

  return (
    <Box>
      <Box sx={{ pt, pb }}>{props.children}</Box>
      <Footer />
    </Box>
  );
}
