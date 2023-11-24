import { DateTimePicker } from "@mui/x-date-pickers";
import { TruckerSchedule } from "../data/types/report";
import { useNotatorTools } from "../tools/use_notator_tools";
import { Box, TextField } from "@mui/material";

export function ScheduleTabView() {
  const { truckerTools } = useNotatorTools();

  function getTruckerSchedule(): TruckerSchedule | null {
    const departureDate = truckerTools.draftTrucker?.schedule.departureDate;
    const returnDate = truckerTools.draftTrucker?.schedule.returnDate;

    if (departureDate && returnDate) {
      return {
        departureDate,
        returnDate,
      };
    } else return null;
  }

  const schedule = getTruckerSchedule();

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
            onChange={() => {}}
            renderInput={(props) => <TextField {...props} />}
          />

          <DateTimePicker
            label="Expected Return Time"
            value={schedule.returnDate}
            onChange={() => {}}
            renderInput={(props) => <TextField {...props} />}
          />
        </Box>
      )}
    </>
  );
}
