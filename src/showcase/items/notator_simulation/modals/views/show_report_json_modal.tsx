import { Box, Typography } from "@mui/material";
import { useNotatorTools } from "../../tools/use_notator_tools";
import {
  NotatorSimulationModal,
  NotatorSimulationModalToggleProps,
} from "../modal";
import JSONPretty from "react-json-pretty";

export default function ShowReportJSONModal(
  props: NotatorSimulationModalToggleProps
) {
  const { report } = useNotatorTools();

  return (
    <NotatorSimulationModal
      minWidth="xl"
      open={props.open}
      onClose={props.onClose}
      sx={{ p: "1rem" }}
    >
      <Typography className="noselect" variant="h6">
        Report JSON Result
      </Typography>

      <Typography gutterBottom>
        In a real system, the post button would take this JSON result and pass
        it through a pipeline. Since this project is just for display, take a
        look at the result!
      </Typography>

      <Box sx={{ fontFamily: "monospace", height: "30rem", overflowY: "auto" }}>
        <JSONPretty data={report} />
      </Box>
    </NotatorSimulationModal>
  );
}
