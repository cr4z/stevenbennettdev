import { Box, Typography } from "@mui/material";
import { Showcase } from "../../../../showcase/items";
import { ShowcaseViewingProjectTitle } from "../components/viewing_projects";
import { ViewCodeOnGithubButton } from "../../../../components/github_button";
import { ShowcaseDateCreated } from "../components/date_created";
import { ShowcaseTags } from "../components/tags";
import ShowcaseModalBase from "./base";

export function BasicShowcaseDetailsModal(props: {
  open: boolean;
  onClose: () => void;
  showcase: Showcase | undefined;
}) {
  const { showcase } = props;

  return (
    <ShowcaseModalBase closeVariant="back" onClose={props.onClose} open={props.open}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mb: "1rem",
            textAlign: "center"
          }}
        >
          <ShowcaseViewingProjectTitle title={showcase?.title!} />
        </Box>
        {showcase?.description && (
          <>
            <Typography display="inline" variant="body1">
              {showcase?.description}
            </Typography>
          </>
        )}

        {showcase?.dateCreated && <ShowcaseDateCreated date={showcase.dateCreated} />}

        {showcase?.tags && showcase.tags.length > 0 && <ShowcaseTags tags={showcase?.tags} />}

        <Box mt="1rem" sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ViewCodeOnGithubButton href={showcase?.github!} />
        </Box>
      </Box>
    </ShowcaseModalBase>
  );
}
