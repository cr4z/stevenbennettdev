import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./design_system/muiTheme";
import { BrowserRouter } from "react-router-dom";
import XNGLocalizationProvider from "./fortitude/localization_provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <XNGLocalizationProvider>
          <App />
        </XNGLocalizationProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
