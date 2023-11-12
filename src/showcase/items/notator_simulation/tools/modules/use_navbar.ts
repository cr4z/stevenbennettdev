import { useState } from "react";

export type NotatorSegmentTabTitle =
  | "Priority"
  | "Duration"
  | "Task List"
  | "Responsibilities"
  | "Resources"
  | "Notes";

export type ViewportNavbarTools = {
  selectedTab: NotatorSegmentTabTitle;
  setSelectedTab: React.Dispatch<React.SetStateAction<NotatorSegmentTabTitle>>;
  setToFirstTab: () => void;
};

export default function useSegmentNavbarTools(): ViewportNavbarTools {
  const [selectedTab, setSelectedTab] =
    useState<NotatorSegmentTabTitle>("Priority");

  function setToFirstTab() {
    setSelectedTab("Priority");
  }

  return { selectedTab, setSelectedTab, setToFirstTab };
}
