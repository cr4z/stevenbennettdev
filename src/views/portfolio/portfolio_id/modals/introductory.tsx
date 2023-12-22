import { Box } from "@mui/material";
import { Showcase } from "../../../../showcase/items";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  selectIntroductoryModalOpen,
  setIntroductoryModelOpen,
} from "../../../../redux/slices/custom_details_modal";
import { ShowcaseViewingProjectTitle } from "../components/viewing_projects";
import { ShowcaseDateCreated } from "../components/date_created";
import { ShowcaseTags } from "../components/tags";
import { ViewCodeOnGithubButton } from "../../../../components/github_button";
import { SBDShadowScrollProvider } from "../../../../sbd_development_kit/components/shadow_scroll";
import ShowcaseModalBase from "./base";
import { ContentGenerator } from "../../../../components/content_generator/content_generator";
import SBDButton from "../../../../design_system/button";

export function IntroductoryModal(props: { showcase: Showcase }) {
  const { showcase } = props;
  const open = useAppSelector(selectIntroductoryModalOpen);
  const dispatch = useAppDispatch();

  function handleClose() {
    dispatch(setIntroductoryModelOpen(false));
  }

  return (
    <ShowcaseModalBase open={open} onClose={handleClose}>
      <Box sx={{ width: "calc(100% - 2.5rem)", textAlign: "center" }}>
        <ShowcaseViewingProjectTitle title={showcase.title} />
      </Box>

      <Box my="1rem" sx={{ width: "100%" }}>
        <SBDShadowScrollProvider
          key={crypto.randomUUID()}
          maxHeight="calc(100vh - 30rem)"
          sx={{ p: "1rem" }}
        >
          {showcase?.contentGeneratorContent && (
            <ContentGenerator content={showcase?.contentGeneratorContent} />
          )}
          {showcase?.dateCreated && <ShowcaseDateCreated date={showcase.dateCreated} />}
          {showcase?.tags && showcase.tags.length > 0 && <ShowcaseTags tags={showcase?.tags} />}
        </SBDShadowScrollProvider>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: ".5rem" }}>
        <ViewCodeOnGithubButton grey href={showcase?.github!} />
        <SBDButton larger onClick={handleClose}>
          Continue to Project
        </SBDButton>
      </Box>
    </ShowcaseModalBase>
  );
}
