import { ThemeProvider } from "@emotion/react";
import XNGLocalizationProvider from "./localization_provider";
import { fortitudeTheme } from "./muiTheme";
import Box from "./components-dev/BoxExtended";

function XNGEnvironmentProvider(props: { children: React.ReactNode }) {
  return (
    <XNGLocalizationProvider>
      <ThemeProvider theme={fortitudeTheme}>
        <Box sx={{ bgcolor: "white", minWidth: "min-content", minHeight: "100%" }}>{props.children}</Box>
      </ThemeProvider>
    </XNGLocalizationProvider>
  );
}

export default XNGEnvironmentProvider;
