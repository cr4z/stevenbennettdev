import { Box, Button, ButtonBase, Paper, Typography } from "@mui/material";
import StatusDot from "../../../components/status_dot";
import { useNotatorTools } from "../../../tools/use_notator_tools";
import { NotatorSegmentTabTitle } from "../../../tools/modules/use_navbar";
import React, { memo } from "react";
import FadeIn from "../../../components/fade_in";
import {
  TruckerStatusTabView,
  ScheduleTabView,
  SmallItemsTabView,
  MediumItemsTabView,
  LargeItemsTabView,
  NotesTabView,
} from "../../../views";

export default function MainContent() {
  const {
    draftReport: draftEvent,
    truckerSelectorTools: { selectedTruckerID: selectedSegmentID },
    viewportNavbarTools,
  } = useNotatorTools();

  return (
    <>
      {draftEvent && selectedSegmentID && (
        <Paper sx={{ flexGrow: 1, overflow: "hidden" }}>
          <FadeIn key={selectedSegmentID} useScale={{ from: 0.98 }}>
            <Box sx={{ padding: "1rem", height: "100%" }}>
              <Typography variant="h6">
                {
                  draftEvent.truckerJournals.find((s) => s.id === selectedSegmentID)
                    ?.title
                }
              </Typography>

              <NotatorSegmentNavigationBar />

              <Box sx={{ height: "calc(100% - 7rem)" }}>
                <TabViewport />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {!viewportNavbarTools.isLastTab && (
                  <Button
                    variant="contained"
                    onClick={() => viewportNavbarTools.nextTab()}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </Box>
          </FadeIn>
        </Paper>
      )}
    </>
  );
}

function NotatorSegmentNavigationBar() {
  const {
    viewportNavbarTools: { setSelectedTab, selectedTab },
  } = useNotatorTools();

  const tabTitles: NotatorSegmentTabTitle[] = [
    "Status",
    "Schedule",
    "Small Items",
    "Medium Items",
    "Large Items",
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
  const { viewportNavbarTools } = useNotatorTools();

  switch (viewportNavbarTools.selectedTab) {
    case "Status":
      return <TruckerStatusTabView />;
    case "Schedule":
      return <ScheduleTabView />;
    case "Small Items":
      return <SmallItemsTabView />;
    case "Medium Items":
      return <MediumItemsTabView />;
    case "Large Items":
      return <LargeItemsTabView />;
    case "Notes":
      return <NotesTabView />;
  }
}
