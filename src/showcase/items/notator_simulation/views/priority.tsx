import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNotatorTools } from "../tools/use_notator_tools";
import { SegmentPriority } from "../data/types/event";

export function PriorityTabView() {
  const {
    segmentTools: { editSegment, draftSegment },
  } = useNotatorTools();

  return (
    <>
      {draftSegment && (
        <Box sx={{ padding: "1rem" }}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="priority"
              name="priority"
              value={draftSegment.priority}
              onChange={(e) =>
                editSegment({
                  path: "priority",
                  value: e.target.value as SegmentPriority,
                })
              }
            >
              <FormControlLabel
                value={"High" as SegmentPriority}
                control={<Radio size="small" />}
                label={"High" as SegmentPriority}
              />
              <FormControlLabel
                value={"Medium" as SegmentPriority}
                control={<Radio size="small" />}
                label={"Medium" as SegmentPriority}
              />
              <FormControlLabel
                value={"Low" as SegmentPriority}
                control={<Radio size="small" />}
                label={"Low" as SegmentPriority}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      )}
    </>
  );
}
