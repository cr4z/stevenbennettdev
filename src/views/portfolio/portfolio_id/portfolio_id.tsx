import { Box, ButtonBase, useTheme } from "@mui/material";
import { SHOWCASES } from "../../../showcase/items";
import { useLocation, useNavigate } from "react-router";
import { SearchControls, SearchResultsView } from "../../../components/search_controls";
import SBDButton from "../../../design_system/button";
import { ICONS, IconRenderer } from "../../../design_system/icons";
import { useEffect, useState } from "react";
import { useBreakpointHelper } from "../../../design_system/hooks/useBreakpointHelper";
import { SBDBack } from "../../../sbd_development_kit/components/button_back";
import { ViewCodeOnGithubButton } from "../../../components/github_button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectIntroductoryModalOpen,
  setIntroductoryModelOpen,
} from "../../../redux/slices/custom_details_modal";
import { BasicShowcaseDetailsModal } from "./modals/basic";
import { ShowcaseViewingProjectTitle } from "./components/viewing_projects";
import { IntroductoryModal } from "./modals/introductory";

function ShowcaseLayout() {
  const { palette } = useTheme();
  const { isMobile } = useBreakpointHelper();
  const location = useLocation();
  const navigate = useNavigate();

  const showcase = SHOWCASES.find((i) => i.id === location.pathname.split("/")[2]);
  const isSidebarExpanded = isMobile ? "100vw" : "25rem";

  // states
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [projectDetailsOpen, setProjectDetailsOpen] = useState<boolean>(false);
  const [queryValue, setQueryValue] = useState<string>("");

  // useEffects
  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [isMobile]);

  const dispatch = useAppDispatch();
  const customDetailsModalOpen = useAppSelector(selectIntroductoryModalOpen);

  useEffect(() => {
    if (showcase?.useIntroductoryModal) {
      dispatch(setIntroductoryModelOpen(true));
    }
  }, [showcase]);

  return (
    Boolean(showcase) && (
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
       
        <Box
          sx={{
            borderBottom: `1px solid ${palette.grey[800]}`,
            display: "flex",
          }}
        >
          {!isMobile && <SBDBack onClick={() => navigate("/portfolio")} />}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: ".7rem",
                padding: "1rem",
              }}
            >
              <ShowcaseViewingProjectTitle title={showcase?.title!} />

              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <SBDButton
                  onClick={() => {
                    if (showcase?.useIntroductoryModal) {
                      dispatch(setIntroductoryModelOpen(!customDetailsModalOpen));
                    } else {
                      setProjectDetailsOpen(!projectDetailsOpen);
                    }
                  }}
                  sx={{
                    paddingLeft: ".5rem",
                    paddingRight: "1rem",
                    gap: ".5rem",
                  }}
                  larger
                >
                  <IconRenderer color={palette.text.primary} widthHeight="2rem" i={<ICONS.Info />} />
                  View Project Details
                </SBDButton>
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
              marginLeft: sidebarOpen ? 0 : isMobile ? "calc(-100vw + 3.1rem)" : "-21.9rem",
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
              position: "relative",
            }}
          >
            {showcase?.useIntroductoryModal && <IntroductoryModal showcase={showcase} />}
            {!showcase?.useIntroductoryModal && (
              <BasicShowcaseDetailsModal
                open={projectDetailsOpen}
                onClose={() => setProjectDetailsOpen(false)}
                showcase={showcase}
              />
            )}

            {showcase?.component}
          </Box>
        </Box>
      </Box>
    )
  );
}

export default ShowcaseLayout;
