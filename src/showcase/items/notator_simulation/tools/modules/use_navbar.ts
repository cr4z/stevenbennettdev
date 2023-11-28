import { useState } from "react";

export type NotatorNavbarTabName =
  | "Status"
  | "Schedule"
  | "Small Items"
  | "Medium Items"
  | "Large Items"
  | "Notes";

export const tabsInOrder: NotatorNavbarTabName[] = [
  "Status",
  "Schedule",
  "Small Items",
  "Medium Items",
  "Large Items",
  "Notes",
];

export type ViewportNavbarTools = {
  selectedTab: NotatorNavbarTabName;
  setSelectedTab: React.Dispatch<React.SetStateAction<NotatorNavbarTabName>>;
  setToFirstTab: () => void;
  isLastTab: boolean;
  isFirstTab: boolean;
  nextTab: () => void;
  previousTab: () => void;
};

const FIRST_TAB: NotatorNavbarTabName = "Status";

export default function useSegmentNavbarTools(): ViewportNavbarTools {
  const [selectedTab, setSelectedTab] =
    useState<NotatorNavbarTabName>(FIRST_TAB);

  function setToFirstTab() {
    setSelectedTab(FIRST_TAB);
  }

  const isLastTab = selectedTab === "Notes";
  const isFirstTab = selectedTab === "Status";

  function nextTab() {
    const i = tabsInOrder.indexOf(selectedTab);
    if (i === tabsInOrder.length - 1) {
      setSelectedTab(tabsInOrder[0]);
    } else {
      setSelectedTab(tabsInOrder[i + 1]);
    }
  }

  function previousTab() {
    const i = tabsInOrder.indexOf(selectedTab);
    setSelectedTab(tabsInOrder[i - 1]);
  }

  return {
    selectedTab,
    setSelectedTab,
    setToFirstTab,
    isLastTab,
    nextTab,
    isFirstTab,
    previousTab,
  };
}
