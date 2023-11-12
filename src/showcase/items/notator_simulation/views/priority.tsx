import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export function PriorityTabView() {
  const [priority, setPriority] = useState("Medium");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPriority(e.target.value);
  }

  return (
    <Box sx={{ padding: "1rem" }}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="priority"
          name="priority"
          value={priority}
          onChange={handleChange}
        >
          <FormControlLabel
            value="High"
            control={<Radio size="small" />}
            label="High"
          />
          <FormControlLabel
            value="Medium"
            control={<Radio size="small" />}
            label="Medium"
          />
          <FormControlLabel
            value="Low"
            control={<Radio size="small" />}
            label="Low"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
