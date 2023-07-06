import { Box, ButtonBase, Typography, useTheme, useThemeProps } from "@mui/material";
import Navbar from "../views/navbar";
import { SHOWCASES } from "../showcase/items";
import { useLocation } from "react-router";
import { SearchControls, SearchResultsView } from "../views/search_controls";
import Button from "../design_system/button";
import { ICONS, IconRenderer } from "../design_system/icons";
import { useEffect, useState } from "react";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";

function ShowcaseLayout() {
  const { palette } = useTheme();
  const { isMobile } = useBreakpointHelper();
  const location = useLocation();

  const showcase = SHOWCASES.find((i) => i.id === location.pathname.split("/")[2]);
  const SIDEBAR_EXPANDED = "25rem";
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, []);

  return (
    Boolean(showcase) && (
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
            borderBottom: `1px solid ${palette.grey[800]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".7rem",
              padding: "1rem",
            }}
          >
            <Box className="noselect">
              <Typography display="inline" variant="h5" sx={{ color: palette.grey[400] }}>
                Viewing Project:{" "}
              </Typography>
              <Typography display="inline" variant="h5">
                {showcase?.title}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <Box
                sx={{
                  bgcolor: palette.grey[500],
                  borderRadius: 999,
                  minWidth: "2.5rem",
                  maxWidth: "2.5rem",
                  maxHeight: "2.5rem",
                  minHeight: "2.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconRenderer color={palette.text.primary} widthHeight="1.6rem" i={showcase!.icon} />
              </Box>
              <Button sx={{ paddingLeft: ".5rem", paddingRight: "1rem", gap: ".5rem" }} larger>
                <IconRenderer color={palette.text.primary} widthHeight="2rem" i={<ICONS.Info />} />
                View Project Details
              </Button>
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
          </Box>
        </Box>
        <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
          {/* SIDEBAR */}
          <Box
            sx={{
              height: "100%",
              minWidth: SIDEBAR_EXPANDED,
              maxWidth: SIDEBAR_EXPANDED,
              display: "flex",
              flexDirection: "column",
              borderRight: `1px solid ${palette.grey[800]}`,

              transition: "all .4s ease",
              marginLeft: sidebarOpen ? 0 : "-25rem",
              paddingRight: sidebarOpen ? 0 : "3rem",
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
                    transition: "all .4s ease",
                    right: sidebarOpen ? 0 : "-3rem",

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

            <SearchResultsView
              onAfterSelect={() => {
                if (isMobile) {
                  setSidebarOpen(false);
                }
              }}
            />
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
