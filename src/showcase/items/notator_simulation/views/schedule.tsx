import { DateTimePicker } from "@mui/x-date-pickers";
import { useFormTools } from "../tools/use_form_tools";
import { Box, TextField } from "@mui/material";

export function ScheduleTabView() {
  const {
    truckerTools: { draftTrucker, editTrucker },
  } = useFormTools();

  const schedule = draftTrucker?.schedule;

  return (
    <>
      {schedule && (
        <Box
          mt="1rem"
          width="100%"
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <DateTimePicker
            label="Departure Time"
            value={schedule.departureDate}
            onChange={(e) =>
              editTrucker({ path: "schedule.departureDate", value: e })
            }
            renderInput={(props) => <TextField {...props} />}
          />

          <DateTimePicker
            label="Expected Return Time"
            value={schedule.returnDate}
            onChange={(e) =>
              editTrucker({ path: "schedule.returnDate", value: e })
            }
            renderInput={(props) => <TextField {...props} />}
          />
        </Box>
      )}
    </>
  );
}
