import { Box, Paper, Typography } from "@mui/material";
import { useNotatorTools } from "../tools/hooks/use_notator_tools";

export function RightWidget() {
  const {
    selectedSegmentTools: { selectedSegmentID },
    draftEvent,
  } = useNotatorTools();

  return (
    <>
      {draftEvent && (
        <>
          {!selectedSegmentID ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Typography className="noselect" color="#000D">
                Add a segment to get started!
              </Typography>
            </Box>
          ) : (
            <Paper sx={{ flexGrow: 1 }}>
              <Typography variant="h6">
                {
                  draftEvent.segments.find((s) => s.id === selectedSegmentID)
                    ?.title
                }
              </Typography>
            </Paper>
          )}
        </>
      )}
    </>
  );
}
