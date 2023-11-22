import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNotatorTools } from "../tools/use_notator_tools";
import { TruckerStatus } from "../data/types/report";

export function StatusTabView() {
  const {
    truckerTools: { editTrucker: editSegment, draftTrucker: draftSegment },
  } = useNotatorTools();

  return (
    <>
      {draftSegment && (
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="priority"
            name="priority"
            value={draftSegment.status}
            onChange={(e) =>
              editSegment({
                path: "status",
                value: e.target.value as TruckerStatus,
              })
            }
          >
            <FormControlLabel
              value={"Off Duty" as TruckerStatus}
              control={<Radio size="small" />}
              label={"Off Duty" as TruckerStatus}
            />
            <FormControlLabel
              value={"En Route" as TruckerStatus}
              control={<Radio size="small" />}
              label={"En Route" as TruckerStatus}
            />
            <FormControlLabel
              value={"Running Late" as TruckerStatus}
              control={<Radio size="small" />}
              label={"Running Late" as TruckerStatus}
            />
            <FormControlLabel
              value={"Heading Back" as TruckerStatus}
              control={<Radio size="small" />}
              label={"Heading Back" as TruckerStatus}
            />
            <FormControlLabel
              value={"Awaiting Instruction" as TruckerStatus}
              control={<Radio size="small" />}
              label={"Awaiting Instruction" as TruckerStatus}
            />
            <FormControlLabel
              value={"Vehicle in Maintenance" as TruckerStatus}
              control={<Radio size="small" />}
              label={"Vehicle in Maintenance" as TruckerStatus}
            />
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
