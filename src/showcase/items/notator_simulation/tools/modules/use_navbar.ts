import { useState } from "react";

export type NotatorSegmentTabTitle =
  | "Status"
  | "Schedule"
  | "Small Items"
  | "Medium Items"
  | "Large Items"
  | "Notes";

export const tabsInOrder: NotatorSegmentTabTitle[] = [
  "Status",
  "Schedule",
  "Small Items",
  "Medium Items",
  "Large Items",
  "Notes",
];

export type ViewportNavbarTools = {
  selectedTab: NotatorSegmentTabTitle;
  setSelectedTab: React.Dispatch<React.SetStateAction<NotatorSegmentTabTitle>>;
  setToFirstTab: () => void;
  isLastTab: boolean;
  nextTab: () => void;
};

const FIRST_TAB: NotatorSegmentTabTitle = "Status";

export default function useSegmentNavbarTools(): ViewportNavbarTools {
  const [selectedTab, setSelectedTab] =
    useState<NotatorSegmentTabTitle>(FIRST_TAB);

  function setToFirstTab() {
    setSelectedTab(FIRST_TAB);
  }

  const isLastTab = selectedTab === "Notes";

  function nextTab() {
    const i = tabsInOrder.indexOf(selectedTab);
    if (i === tabsInOrder.length - 1) {
      setSelectedTab(tabsInOrder[0]);
    } else {
      setSelectedTab(tabsInOrder[i + 1]);
    }
  }

  return { selectedTab, setSelectedTab, setToFirstTab, isLastTab, nextTab };
}
