import { useState } from "react";

export type NotatorSegmentTabTitle =
  | "Priority"
  | "Duration"
  | "Task List"
  | "Responsibilities"
  | "Resources"
  | "Notes";

export type SegmentNavbarTools = {
  selectedTab: NotatorSegmentTabTitle;
  setSelectedTab: React.Dispatch<React.SetStateAction<NotatorSegmentTabTitle>>;
  setToFirstTab: () => void;
};

export default function useSegmentNavbarTools(): SegmentNavbarTools {
  const [selectedTab, setSelectedTab] =
    useState<NotatorSegmentTabTitle>("Priority");

  function setToFirstTab() {
    setSelectedTab("Priority");
  }

  return { selectedTab, setSelectedTab, setToFirstTab };
}
