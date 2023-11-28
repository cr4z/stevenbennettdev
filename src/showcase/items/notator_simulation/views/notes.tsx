import { Box, TextField } from "@mui/material";
import { useNotatorTools } from "../tools/use_notator_tools";

export function NotesTabView() {
  const {
    truckerTools: { editTrucker, draftTrucker },
  } = useNotatorTools();

  return (
    <>
      {draftTrucker && (
        <Box
          width="100%"
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <TextField
            defaultValue={draftTrucker.notes}
            multiline
            rows={8}
            label="Notes"
            placeholder="Type notes here..."
            onBlur={(e) =>
              editTrucker({ path: "notes", value: e.target.value })
            }
          />
        </Box>
      )}
    </>
  );
}
