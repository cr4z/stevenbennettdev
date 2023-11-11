import { Typography } from "@mui/material";
import { NotatorSimulationModal } from "./components/modal";

function IntroductionModal() {
  return (
    <NotatorSimulationModal open={false} onClose={() => {}} minWidth="md">
      <Typography sx={{ color: "#000D" }}>
        <b>Notice</b>
      </Typography>
      <Typography sx={{ color: "#000D" }}>
        Looks like you're trying to view this on mobile! Unfortunately this
        screen wasn't built to for mobile users, which was an intentional choice
        by the executive team who called for this screen's construction,
        providing instead a different screen entirely for our mobile users. You
        can still view it, but just understand the experience won't be as
        optimal. <br />
        Note to add to the intro modal later: What would I have done
        differently? Or possibly refactor later? Replace the notator context
        module with Redux to avoid all of these granular state update niche
        issues.
        <br />
        What did I learn? A lot of granular knowledge of how to create a
        selector implementation, giving me more context on how libraries like
        Redux and Redux-Toolkit work under the hood.
      </Typography>
    </NotatorSimulationModal>
  );
}
