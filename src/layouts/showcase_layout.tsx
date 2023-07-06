import { Box, ButtonBase, useTheme, useThemeProps } from "@mui/material";
import Navbar from "../views/navbar";
import { SHOWCASES } from "../showcase/items";
import { useLocation } from "react-router";
import { SearchControls, SearchResultsView } from "../views/search_controls";
import Button from "../design_system/button";
import { ICONS, IconRenderer } from "../design_system/icons";
import { ShowcaseDetails } from "../views/showcase_item";
import { useState } from "react";

function ShowcaseLayout() {
  const { palette } = useTheme();
  const location = useLocation();

  const showcase = SHOWCASES.find((i) => i.id === location.pathname.split("/")[2]);
  const SIDEBAR_EXPANDED = "25rem";
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    Boolean(showcase?.component) && (
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            height: "4rem",
            borderBottom: `1px solid ${palette.grey[800]}`,
          }}
        >
          <Navbar />
        </Box>

        <Box
          sx={{
            height: "6rem",
            borderBottom: `1px solid ${palette.grey[800]}`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ minWidth: SIDEBAR_EXPANDED, maxWidth: SIDEBAR_EXPANDED }}>
            {showcase && <ShowcaseDetails {...showcase} />}
          </Box>
          <Button
            sx={{ paddingLeft: ".5rem", paddingRight: "1rem", gap: ".5rem" }}
            larger
            variant="cta"
            href={showcase?.github}
          >
            <IconRenderer widthHeight="2rem" i={<ICONS.GitHub />} />
            View Code on GitHub
          </Button>
        </Box>
        <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
          {/* SIDEBAR */}
          <Box
            sx={{
              transition: "margin .4s ease",
              marginLeft: sidebarOpen ? 0 : "-21.8rem",
              height: "100%",
              minWidth: SIDEBAR_EXPANDED,
              maxWidth: SIDEBAR_EXPANDED,
              display: "flex",
              flexDirection: "column",
              borderRight: `1px solid ${palette.grey[800]}`,
            }}
          >
            <Box
              sx={{
                py: "1rem",
                transition: "padding .4s ease",
                paddingLeft: "1rem",
                paddingRight: ".5rem",
                gap: ".7rem",
                position: "relative",
                display: "flex",
              }}
            >
              <SearchControls />
              <Box sx={{ mt: "3px" }}>
                <ButtonBase
                  sx={{
                    minWidth: "2rem",
                    minHeight: "2rem",
                    maxWidth: "2rem",
                    maxHeight: "2rem",
                    borderRadius: 999,
                    border: "1px solid " + palette.grey[500],
                    cursor: "pointer",

                    bgcolor: palette.background.default,
                    ":hover": {
                      bgcolor: palette.grey[700],
                    },
                  }}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <IconRenderer
                    color={palette.text.primary}
                    sx={{ marginLeft: sidebarOpen ? "-3px" : "3px" }}
                    widthHeight="1.5rem"
                    left={sidebarOpen}
                    right={!sidebarOpen}
                    i={<ICONS.Caret />}
                  />
                </ButtonBase>
              </Box>
            </Box>

            <Box
              sx={{
                transition: "padding .4s ease",
                paddingLeft: sidebarOpen ? 0 : "-20rem",
                paddingRight: "4rem"
              }}
            >
              <SearchResultsView />
            </Box>
          </Box>

          <Box
            sx={{
              bgcolor: palette.background.default,
              height: "100%",
              overflowY: "auto",
            }}
          >
            {showcase?.component}
          </Box>
        </Box>
      </Box>
    )
  );
}

export default ShowcaseLayout;
