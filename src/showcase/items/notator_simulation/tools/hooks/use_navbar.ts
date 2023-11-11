import { useState } from "react";

export type NotatorSegmentTabTitle =
  | "Priority"
  | "Duration"
  | "Task List"
  | "Responsiblities"
  | "Resources"
  | "Notes";

export type SegmentNavbarTools = {
  selectedTab: NotatorSegmentTabTitle;
  setSelectedTab: React.Dispatch<React.SetStateAction<NotatorSegmentTabTitle>>;
};

export default function useSegmentNavbarTools(): SegmentNavbarTools {
  const [selectedTab, setSelectedTab] =
    useState<NotatorSegmentTabTitle>("Priority");

  return { selectedTab, setSelectedTab };
}
