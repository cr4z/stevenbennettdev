/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Box, ButtonBase, Typography, useTheme } from "@mui/material";
import Navbar from "./navbar";
import { SHOWCASES } from "../showcase/items";
import { useLocation, useNavigate } from "react-router";
import {
  SearchControls,
  SearchResultsView,
} from "../components/search_controls";
import Button from "../design_system/button";
import { ICONS, IconRenderer } from "../design_system/icons";
import { useEffect, useState } from "react";
import { useBreakpointHelper } from "../design_system/hooks/useBreakpointHelper";
import { BackButton } from "../components/button_back";
import { ModalDialog } from "../components/modal_dialog";
import { ViewCodeOnGithubButton } from "../components/github_button";

function ShowcaseLayout() {
  const { palette } = useTheme();
  const { isMobile } = useBreakpointHelper();
  const location = useLocation();
  const navigate = useNavigate();

  const showcase = SHOWCASES.find(
    (i) => i.id === location.pathname.split("/")[2]
  );
  const isSidebarExpanded = isMobile ? "100vw" : "25rem";

  // states
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [projectDetailsOpen, setProjectDetailsOpen] = useState<boolean>(false);
  const [queryValue, setQueryValue] = useState<string>("");

  // useEffects
  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [isMobile]);

  return (
    Boolean(showcase) && (
      <>
        {/* Modals */}
        <ModalDialog
          onClose={() => setProjectDetailsOpen(false)}
          open={projectDetailsOpen}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mb: "1rem",
              }}
            >
              <ViewingProject title={showcase?.title!} />
            </Box>
            {showcase?.description && (
              <>
                <Typography display="inline" variant="body1">
                  {showcase?.description}
                </Typography>
              </>
            )}
            {showcase?.dateCreated && (
              <>
                <Typography display="inline" variant="body2">
                  Date Created:{" "}
                </Typography>
                <Typography display="inline" variant="body1">
                  {showcase?.dateCreated?.format("MMMM D, YYYY")}
                </Typography>
              </>
            )}
            <Typography variant="body2">Tagged:</Typography>
            <Box sx={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
              {showcase?.tags.map((tag, i) => (
                <Typography
                  key={i}
                  display="inline"
                  sx={{
                    padding: ".3rem .5rem",
                    bgcolor: palette.grey[500],
                    borderRadius: "6px",
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>

            <Box mt="1rem" sx={{ display: "flex", justifyContent: "flex-end" }}>
              <ViewCodeOnGithubButton href={showcase?.github!} />
            </Box>
          </Box>
        </ModalDialog>

        {/* DOM Hierarchy */}
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
            }}
          >
            {!isMobile && <BackButton onClick={() => navigate("/portfolio")} />}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".7rem",
                  padding: "1rem",
                }}
              >
                <ViewingProject title={showcase?.title!} />

                <Box
                  sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <Button
                    onClick={() => setProjectDetailsOpen(true)}
                    sx={{
                      paddingLeft: ".5rem",
                      paddingRight: "1rem",
                      gap: ".5rem",
                    }}
                    larger
                  >
                    <IconRenderer
                      color={palette.text.primary}
                      widthHeight="2rem"
                      i={<ICONS.Info />}
                    />
                    View Project Details
                  </Button>
                  <ViewCodeOnGithubButton href={showcase?.github!} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
            {/* SIDEBAR */}
            <Box
              sx={{
                height: "100%",
                minWidth: isSidebarExpanded,
                maxWidth: isSidebarExpanded,
                display: "flex",
                flexDirection: "column",
                borderRight: `1px solid ${palette.grey[800]}`,

                transition: "all .4s ease",
                marginLeft: sidebarOpen
                  ? 0
                  : isMobile
                  ? "calc(-100vw + 3.1rem)"
                  : "-21.9rem",
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
                <SearchControls
                  queryValue={queryValue}
                  onChange={(e) => {
                    setQueryValue(e.target.value);
                  }}
                />
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
                queryValue={queryValue}
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
                width: "100%",
              }}
            >
              {showcase?.component}
            </Box>
          </Box>
        </Box>
      </>
    )
  );
}

function ViewingProject(props: { title: string }) {
  const { palette } = useTheme();

  return (
    <Box>
      <Typography
        className="noselect"
        display="inline"
        variant="h5"
        sx={{ color: palette.grey[400] }}
      >
        Viewing Project:{" "}
      </Typography>
      <Typography display="inline" variant="h5">
        {props.title}
      </Typography>
    </Box>
  );
}

export default ShowcaseLayout;
