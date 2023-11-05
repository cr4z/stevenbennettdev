import { useState, useEffect } from "react";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { EditableLabelMultiline } from "../components/editable_label/editable_multiline_label";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NotatorSimulationModal } from "../components/modals/modal";

export function EditableDescription() {
  const { draftEvent } = useNotatorTools();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} />
      <EditableLabelMultiline
        placeholder="Add a description..."
        value={draftEvent!.description}
        onClick={() => setOpen(true)}
        height="2.5rem"
        px=".5rem"
      />
    </>
  );
}

function Modal(props: { open: boolean; onClose: () => void }) {
  const { editDraft, draftEvent } = useNotatorTools();
  const [cachedDescription, setCachedDescription] = useState<string>("");

  useEffect(() => {
    setCachedDescription(draftEvent?.description ?? "");
  }, [draftEvent]);

  return (
    <NotatorSimulationModal
      open={props.open}
      onClose={() => props.onClose()}
      sx={{ p: "1rem" }}
      minWidth="lg"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editDraft("description", cachedDescription);
          props.onClose();
        }}
      >
        <Typography id="add-description-modal" variant="h6" component="h2">
          Add a description
        </Typography>
        <TextField
          autoFocus
          id="add-description-textbox"
          label="Description"
          multiline
          rows={4}
          placeholder="Type your description here"
          variant="outlined"
          fullWidth
          margin="normal"
          value={cachedDescription}
          onChange={(e) => setCachedDescription(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
            gap: "1rem",
          }}
        >
          <Button onClick={props.onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Box>
      </form>
    </NotatorSimulationModal>
  );
}
