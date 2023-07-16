import { Box, Typography, useTheme } from "@mui/material";
import { ICONS, IconRenderer } from "../design_system/icons";
import Input from "../design_system/input";
import { SHOWCASES, Showcase } from "../showcase/items";
import Button from "../design_system/button";
import { ShowcaseDetailsInteractive } from "./showcase_item";

export function SearchControls(props: {
  queryValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}) {
  const { palette } = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
      <Input
        useIcon="search"
        placeholder="Search projects..."
        value={props.queryValue}
        onChange={props.onChange}
      />
      <Box>
        <Button variant="contained" sx={{ gap: "6px", mt: ".5rem" }}>
          <IconRenderer widthHeight="1rem" i={<ICONS.PriceTag />} />
          Tags
        </Button>
      </Box>
      <Typography className="noselect" variant="subtitle1" color={palette.grey[400]}>
        Filtering by no tags currently
      </Typography>
    </Box>
  );
}

export function SearchResultsView(props: { onAfterSelect?: () => void; queryValue: string }) {
  const queriedItems: Showcase[] = [];

  if (props.queryValue) {
    SHOWCASES.forEach((s) => {
      const searchReferencesDescription = (
        s.description?.toString() !== "[object Object]" ? s.description : s.descriptionPlainText
      )
        ?.toString()
        ?.toLowerCase()
        ?.includes(props.queryValue.toLowerCase());
      const searchIncludesTag = s.tags.join().toLowerCase().includes(props.queryValue.toLowerCase());
      const searchIncludesTitle = s.title.toLowerCase().includes(props.queryValue.toLowerCase(), 0);

      if (searchIncludesTag || searchIncludesTitle || searchReferencesDescription) {
        queriedItems.push(s);
      }
    });
  } else {
    queriedItems.push(...SHOWCASES);
  }

  return (
    <Box className="green-scrollbar" sx={{ overflowY: "auto", height: "100%", width: "100%" }}>
      {queriedItems.map((showcase, i) => (
        <ShowcaseDetailsInteractive
          key={i}
          showcase={showcase}
          onAfterSelect={() => {
            if (props.onAfterSelect) {
              props.onAfterSelect();
            }
          }}
        />
      ))}
    </Box>
  );
}
