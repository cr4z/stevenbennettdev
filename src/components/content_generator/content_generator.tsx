import { Box, Typography } from "@mui/material";
import { UsedTechProduct } from "./components/used_tech_product";
import { ContentGeneratorContent } from "./types/types";

export function ContentGenerator(props: { content: ContentGeneratorContent }) {
  const { content } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="body1">{content.introOverview}</Typography>
      {content.techUsed && (
        <Box my="1.5rem">
          {content.techUsed?.map((product) => (
            <UsedTechProduct product={product} />
          ))}
        </Box>
      )}

      <Typography variant="h5">Features & Functionality</Typography>
      {content.featuresAndFunctionality && <Typography>{content.featuresAndFunctionality}</Typography>}
    </Box>
  );
}
