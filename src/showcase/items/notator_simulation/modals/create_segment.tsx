import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";
import { NotatorSimulationModal } from "../components/modal";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NotatorEventSegment } from "../data/types/event";

type FormValues = {
  segmentName: "";
};

export function CreateSegmentModal(props: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    editDraft,
    draftEvent,
    selectedSegmentTools: { setSelectedSegmentToLast },
  } = useNotatorTools();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<FormValues>({
    defaultValues: {
      segmentName: "",
    },
  });

  useEffect(() => {
    if (props.open) {
      setFocus("segmentName");
    }
  }, [open, setFocus]);

  function onSubmit(data: FormValues) {
    const newSegment: NotatorEventSegment = {
      id: crypto.randomUUID(),
      title: data.segmentName,
    };
    const updatedSegments = [...draftEvent!.segments, newSegment];
    const freshEvent = editDraft("segments", updatedSegments, () =>
      setSelectedSegmentToLast(freshEvent)
    );
    reset(); // Reset the form fields
    props.onClose(); // Close the modal
  }

  return (
    <NotatorSimulationModal
      open={props.open}
      onClose={props.onClose}
      sx={{ p: "1rem" }}
      minWidth="lg"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography id="add-description-modal" variant="h6" component="h2">
          Create a new segment
        </Typography>
        <TextField
          {...register("segmentName", {
            required: "Segment name is required",
            minLength: {
              value: 3,
              message: "Segment name must be 3 characters or longer",
            },
          })}
          autoFocus
          id="add-segment-textbox"
          label="Name of segment"
          placeholder="Type your segment's name here"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.segmentName}
          helperText={errors.segmentName?.message ?? ""}
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
            Create Segment
          </Button>
        </Box>
      </form>
    </NotatorSimulationModal>
  );
}
