import { Box, Typography } from "@mui/material";
import { UsedTechProduct } from "./components/used_tech_product";
import { ContentGeneratorContent } from "./types/types";

export function ContentGenerator(props: { content: ContentGeneratorContent }) {
  const { content } = props;

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <Typography variant="body1">{content.introOverview}</Typography>
      {content.techUsed && (
        <Box>
          <Typography variant="h5" gutterBottom>
            {content.techUsed.length > 1 ? "Technologies Used" : "Technology Used"}
          </Typography>
          {content.techUsed?.map((product) => (
            <UsedTechProduct product={product} />
          ))}
        </Box>
      )}

      {content.featuresAndFunctionality && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Features & Functionality
          </Typography>
          <Typography>{content.featuresAndFunctionality}</Typography>
        </Box>
      )}

      {content.skillsShown && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Skills Shown
          </Typography>
          <Box component="ul" sx={{ display: "flex", flexDirection: "column", gap: ".25rem" }}>
            {content.skillsShown.map((s) => (
              <li>
                <Typography variant="h6" p={0}>
                  {s.skill}
                </Typography>
                <Typography variant="body1">{s.desc}</Typography>
              </li>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
