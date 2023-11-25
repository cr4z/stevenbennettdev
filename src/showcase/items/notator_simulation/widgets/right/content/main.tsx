import { Box, Button, ButtonBase, Paper, Typography } from "@mui/material";
import StatusDot from "../../../components/status_dot";
import { useNotatorTools } from "../../../tools/use_notator_tools";
import { NotatorNavbarTabName } from "../../../tools/modules/use_navbar";
import React, { memo } from "react";
import FadeIn from "../../../components/fade_in";
import { StatusTabView } from "../../../views/status";
import { ScheduleTabView } from "../../../views/schedule";
import { NotesTabView } from "../../../views/notes";
import SmallItemsTabView from "../../../views/small_items/small_items";

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
            <Box
              sx={{
                padding: ".75rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">
                  {
                    draftEvent.truckerJournals.find(
                      (s) => s.id === selectedSegmentID
                    )?.fullName
                  }
                </Typography>

                <Box sx={{ width: "45.5rem" }}>
                  <NotatorSegmentNavigationBar />

                  <Box sx={{ height: "calc(100% - 7rem)" }}>
                    <MemoizedTabViewport />
                  </Box>
                </Box>
              </Box>

              <Box
                className="noselect"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: ".75rem",
                }}
              >
                <Button
                  disabled={viewportNavbarTools.isFirstTab}
                  variant="contained"
                  onClick={() => viewportNavbarTools.previousTab()}
                >
                  Back
                </Button>
                <Button
                  disabled={viewportNavbarTools.isLastTab}
                  variant="contained"
                  onClick={() => viewportNavbarTools.nextTab()}
                >
                  Next
                </Button>
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
    truckerTools: { draftTrucker },
  } = useNotatorTools();

  const tabTitles: NotatorNavbarTabName[] = [
    "Status",
    "Schedule",
    "Small Items",
    "Medium Items",
    "Large Items",
    "Notes",
  ];

  return (
    <Box
      sx={{ display: "flex", gap: ".75rem", justifyContent: "space-between" }}
    >
      {tabTitles.map((title: NotatorNavbarTabName) => {
        return (
          <MemoizedSegmentNavButton
            key={title}
            onClick={() => setSelectedTab(title)}
            title={title}
            isSelected={selectedTab === title}
            disabled={draftTrucker?.status === "Off Duty" && title !== "Status"}
          />
        );
      })}
    </Box>
  );
}

type MemoizedSegmentNavButtonProps = {
  title: string;
  onClick: () => void;
  isSelected: boolean;
  disabled?: boolean;
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
          borderBottom: "2px solid #0002",
          mt: ".25rem",
          gap: ".5rem",
          opacity: props.disabled ? 0.6 : 1,
        }}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <StatusDot isSelected={props.isSelected} />
        <Typography>{props.title}</Typography>
      </ButtonBase>
    );
  }
);

function MemoizedTabViewport() {
  return (
    <Box sx={{ padding: "1rem" }}>
      <ShowIfSelected tab="Status" component={<StatusTabView />} />
      <ShowIfSelected tab="Schedule" component={<ScheduleTabView />} />
      <ShowIfSelected tab="Small Items" component={<SmallItemsTabView />} />
      <ShowIfSelected tab="Notes" component={<NotesTabView />} />
    </Box>
  );
}

/**
 * We are opting to simply hide a box's visibility rather than unmounting the component entirely
 * so that individual states persist.
 */
function ShowIfSelected(props: {
  tab: NotatorNavbarTabName;
  component: React.ReactNode;
}) {
  const { viewportNavbarTools } = useNotatorTools();

  return (
    <Box
      sx={
        viewportNavbarTools.selectedTab === props.tab
          ? { visibility: "visible" }
          : { visibility: "hidden", height: 0, width: 0, overflow: "none" }
      }
    >
      {props.component}
    </Box>
  );
}
