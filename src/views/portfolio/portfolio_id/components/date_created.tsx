import { Box, Typography } from "@mui/material";
import { Dayjs } from "dayjs";

export function ShowcaseDateCreated(props: { date: Dayjs }) {
  return (
    <Box my="1rem" sx={{ width: "100%" }}>
      <Typography display="inline" variant="body2">
        Date Created:{" "}
      </Typography>
      <Typography display="inline" variant="body1">
        {props.date.format("MMMM D, YYYY")}
      </Typography>
    </Box>
  );
}
