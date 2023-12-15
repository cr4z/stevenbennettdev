import { Box, Typography } from "@mui/material";
import { UsedTechProduct } from "./components/used_tech_product";
import { ContentGeneratorContent } from "./types/types";

export function ContentGenerator(props: { content: ContentGeneratorContent }) {
  const { content } = props;

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {content.introOverview}
      {content.techUsed && (
        <Box>
          <Typography variant="h5" mb="1rem">
            {content.techUsed.length > 1 ? "Technologies Used" : "Technology Used"}
          </Typography>
          {content.techUsed?.map((product, i) => (
            <UsedTechProduct product={product} key={i} />
          ))}
        </Box>
      )}

      {content.featuresAndFunctionality && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Features & Functionality
          </Typography>
          {content.featuresAndFunctionality}
        </Box>
      )}

      {content.skillsShown && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Skills Shown
          </Typography>
          <Box component="ul" sx={{ display: "flex", flexDirection: "column", gap: ".25rem" }}>
            {content.skillsShown.map((s, i) => (
              <li key={i}>
                <Typography variant="h6" p={0}>
                  {s.skill}
                </Typography>
                {s.desc}
              </li>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
