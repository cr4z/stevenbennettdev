import { Box, Button, Paper } from "@mui/material";
import { EditableTitle } from "../editables/title";
import { EditableTime } from "../editables/time";
import { EditableDescription } from "../editables/description";
import { EditableLocation } from "../editables/location";
import { useFormTools } from "../tools/use_form_tools";
import { useState } from "react";
import ShowReportJSONModal from "../modals/views/show_report_json_modal";

export function HeaderWidget() {
  const { saveReport, draftReport } = useFormTools();

  function handleSave() {
    if (!draftReport) {
      console.error("Report was not provided in save handler!");
      return;
    }

    saveReport(draftReport);
  }

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <ShowReportJSONModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <Paper
        sx={{
          width: "100%",
          padding: ".5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            maxWidth: "30rem",
          }}
        >
          <EditableTitle />
          <Box sx={{ display: "flex", gap: ".5rem" }}>
            <EditableTime />
            <EditableLocation />
          </Box>
          <EditableDescription />
        </Box>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
            padding: ".25rem",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button variant="outlined" onClick={handleSave}>
              Save
            </Button>
            <Button variant="contained" onClick={() => setModalOpen(true)}>
              Post
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
