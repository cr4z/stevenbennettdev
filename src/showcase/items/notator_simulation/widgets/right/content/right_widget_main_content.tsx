import { Box, ButtonBase, Paper, Typography } from "@mui/material";
import StatusDot from "../../../components/status_dot";
import { useNotatorTools } from "../../../tools/hooks/use_notator_tools";
import { NotatorSegmentTabTitle } from "../../../tools/hooks/use_navbar";
import React, { memo } from "react";
import {
  DurationTabView,
  NotesTabView,
  PriorityTabView,
  ResourcesTabView,
  ResponsibilitiesTabView,
  TaskListTabView,
} from "../../../views";
import FadeIn from "../../../components/fade_in";

export default function RightWidgetMainContent() {
  const {
    draftEvent,
    selectedSegmentTools: { selectedSegmentID },
  } = useNotatorTools();

  return (
    <>
      {draftEvent && (
        <Paper sx={{ flexGrow: 1, padding: "1rem" }}>
          <FadeIn key={selectedSegmentID} useScale={{ from: 0.98 }}>
            <Typography variant="h6">
              {
                draftEvent.segments.find((s) => s.id === selectedSegmentID)
                  ?.title
              }
            </Typography>

            <NotatorSegmentNavigationBar />

            <TabViewport />
          </FadeIn>
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
    "Responsibilities",
    "Resources",
    "Notes",
  ];

  return (
    <Box sx={{ display: "flex", gap: ".75rem" }}>
      {tabTitles.map((title: NotatorSegmentTabTitle) => (
        <MemoizedSegmentNavButton
          key={title}
          onClick={() => setSelectedTab(title)}
          title={title}
          isSelected={selectedTab === title}
        />
      ))}
    </Box>
  );
}

type MemoizedSegmentNavButtonProps = {
  title: string;
  onClick: () => void;
  isSelected: boolean;
};

/**
 * Reason for memoization: This component was rerendering every time a button was click, preventing its
 * MUI ripple animation from occurring.
 */
const MemoizedSegmentNavButton = memo(
  (props: MemoizedSegmentNavButtonProps) => {
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
);

function TabViewport(): React.ReactNode {
  const { segmentNavbarTools } = useNotatorTools();

  switch (segmentNavbarTools.selectedTab) {
    case "Priority":
      return <PriorityTabView />;
    case "Duration":
      return <DurationTabView />;
    case "Task List":
      return <TaskListTabView />;
    case "Responsibilities":
      return <ResponsibilitiesTabView />;
    case "Resources":
      return <ResourcesTabView />;
    case "Notes":
      return <NotesTabView />;
  }
}
