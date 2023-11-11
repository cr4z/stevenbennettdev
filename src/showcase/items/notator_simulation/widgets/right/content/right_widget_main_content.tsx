import { Box, ButtonBase, Paper, Typography } from "@mui/material";
import StatusDot from "../../../components/status_dot";
import { useNotatorTools } from "../../../tools/hooks/use_notator_tools";
import { NotatorSegmentTabTitle } from "../../../tools/hooks/use_navbar";
import {
  selectDraftEvent,
  selectSelectedSegmentID,
  useNotatorToolsSelector,
} from "../../../tools/selector";


export default function RightWidgetMainContent() {
  const selectedSegmentID = useNotatorToolsSelector(selectSelectedSegmentID);
  const draftEvent = useNotatorToolsSelector(selectDraftEvent);

  return (
    <>
      {draftEvent && (
        <Paper sx={{ flexGrow: 1, padding: "1rem" }}>
          <Typography variant="h6">
            {draftEvent.segments.find((s) => s.id === selectedSegmentID)?.title}
          </Typography>

          <NotatorSegmentNavigationBar />
          <TabViewport />
        </Paper>
      )}
    </>
  );
}

function NotatorSegmentNavigationBar() {
  const { segmentNavbarTools } = useNotatorTools();
  const { selectedTab, setSelectedTab } = segmentNavbarTools;

  const tabTitles: NotatorSegmentTabTitle[] = [
    "Priority",
    "Duration",
    "Task List",
    "Responsiblities",
    "Resources",
    "Notes",
  ];

  return (
    <Box sx={{ display: "flex", gap: ".75rem" }}>
      {tabTitles.map((title: NotatorSegmentTabTitle) => (
        <SegmentNavButton
          key={title}
          onClick={() => setSelectedTab(title)}
          title={title}
          isSelected={selectedTab === title}
        />
      ))}
    </Box>
  );

  function SegmentNavButton(props: {
    title: string;
    onClick: () => void;
    isSelected: boolean;
  }) {
    return (
      <ButtonBase
        sx={{
          p: ".5rem .75rem",
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          borderBottom: "2px solid #0002",
          mt: ".25rem",
        }}
        onClick={props.onClick}
      >
        <StatusDot isSelected={props.isSelected} />
        <Typography>{props.title}</Typography>
      </ButtonBase>
    );
  }
}

function TabViewport() {
  return <></>;
}
