import { Stack, Typography } from "@mui/material";
// @ts-ignore
import { ReactComponent as SBLogo } from "../../../svgs/logo.svg";

function NameLogo() {
  return (
    <Stack direction="row" alignItems="center" gap=".25rem">
      <SBLogo />
      <Typography className="noselect" variant="h4" sx={{ paddingX: ".5rem", fontFamily: "Roboto" }}>
        Steven Bennett
      </Typography>
    </Stack>
  );
}

export default NameLogo;
