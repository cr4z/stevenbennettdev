import { useForm } from "react-hook-form";
import { useFormTools } from "../../tools/use_form_tools";
import { ComplexFormModal } from "../modal";
import { Box, Button, TextField, Typography } from "@mui/material";
import { TruckerJournal } from "../../data/types/report";
import { getBlankTrucker } from "../../data/mocks/blank_trucker";

type FormValues = {
  truckerName: "";
};

export function CreateTruckerModal(props: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    editDraft,
    draftReport: draftEvent,
    truckerSelectorTools: {
      setSelectedTruckerToLast: setSelectedTruckerToLast,
    },
  } = useFormTools();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm<FormValues>({
    defaultValues: {
      truckerName: "",
    },
  });

  function onSubmit(data: FormValues) {
    const newTrucker: TruckerJournal = getBlankTrucker({
      name: data.truckerName,
    });
    const updatedTruckers = [...draftEvent!.truckerJournals, newTrucker];
    const freshEvent = editDraft({
      path: "truckerJournals",
      value: updatedTruckers,
      cb: () => setSelectedTruckerToLast(freshEvent),
    });
    reset(); // Reset the form fields
    props.onClose(); // Close the modal
  }

  return (
    <ComplexFormModal
      open={props.open}
      onClose={props.onClose}
      sx={{ p: "1rem" }}
      minWidth="lg"
      onFocusReady={() => {
        setFocus("truckerName");
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography id="add-description-modal" variant="h6" component="h2">
          Add a new trucker
        </Typography>
        <TextField
          {...register("truckerName", {
            required: "Trucker name is required",
            minLength: {
              value: 3,
              message: "Trucker's name must be 3 characters or longer",
            },
            validate: {
              isUnique: (value) =>
                draftEvent!.truckerJournals.every(
                  (s) =>
                    s.fullName.toLocaleLowerCase() !== value.toLocaleLowerCase()
                ) || "Trucker name already exists",
            },
          })}
          id="add-trucker-textbox"
          label="Name of trucker"
          placeholder="Type the trucker's name here"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.truckerName}
          helperText={errors.truckerName?.message ?? ""}
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
            Add Trucker
          </Button>
        </Box>
      </form>
    </ComplexFormModal>
  );
}
