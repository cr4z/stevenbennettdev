import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNotatorTools } from "../tools/use_notator_tools";
import { TruckerStatus } from "../data/types/event";

export function TruckerStatusTabView() {
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
                  value: e.target.value as TruckerStatus,
                })
              }
            >
              <FormControlLabel
                value={"High" as TruckerStatus}
                control={<Radio size="small" />}
                label={"High" as TruckerStatus}
              />
              <FormControlLabel
                value={"Medium" as TruckerStatus}
                control={<Radio size="small" />}
                label={"Medium" as TruckerStatus}
              />
              <FormControlLabel
                value={"Low" as TruckerStatus}
                control={<Radio size="small" />}
                label={"Low" as TruckerStatus}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      )}
    </>
  );
}
