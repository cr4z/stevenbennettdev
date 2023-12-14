import { Box, Container, useTheme } from "@mui/material";
import { Showcase } from "../../../../showcase/items";
import { SBDClose } from "../../../../sbd_development_kit/components/close";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  selectIntroductoryModalOpen,
  setCustomDetailsModelOpen,
} from "../../../../redux/slices/custom_details_modal";
import { ShowcaseViewingProjectTitle } from "../components/viewing_projects";
import { ShowcaseDateCreated } from "../components/date_created";
import { ShowcaseTags } from "../components/tags";
import { ViewCodeOnGithubButton } from "../../../../components/github_button";
import { ShadowScrollProvider } from "../../../../showcase/items/notator_simulation/components/shadow_scroll";

export function IntroductoryModal(props: { showcase: Showcase }) {
  const { palette } = useTheme();
  const { showcase } = props;
  const open = useAppSelector(selectIntroductoryModalOpen);
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(setCustomDetailsModelOpen(false));
  }

  return (
    <Box
      onClick={handleClose}
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 9999,
        visibility: open ? "visible" : "hidden",
        bgcolor: open ? "#0004" : "#0000",
        transition: "visibility .25s ease, background-color .25s ease",
      }}
    >
      <Container sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box
          onClick={(e) => e.stopPropagation()}
          p="1rem"
          sx={{
            bgcolor: palette.background.default,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "6px",
            position: "relative",
            transform: open ? "scale(1)" : "scale(.98)",
            opacity: open ? 1 : 0,
            transition: "transform .25s ease, opacity .25s ease",
            width: "50rem",
          }}
        >
          <Box sx={{ position: "absolute", top: 0, right: 0 }}>
            <SBDClose onClick={handleClose} />
          </Box>
          <Box sx={{ width: "calc(100% - 2.5rem)", textAlign: "center" }}>
            <ShowcaseViewingProjectTitle title={showcase.title} />
          </Box>

          <Box my="1rem">
            <ShadowScrollProvider maxHeight="calc(100vh - 30rem)">
              {showcase?.description}
              {showcase?.dateCreated && <ShowcaseDateCreated date={showcase.dateCreated} />}
              {showcase?.tags && showcase.tags.length > 0 && <ShowcaseTags tags={showcase?.tags} />}
            </ShadowScrollProvider>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <ViewCodeOnGithubButton href={showcase?.github!} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
