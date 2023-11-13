import { useContext } from "react";
import { ReportContext } from "./context";

export function useNotatorTools() {
  const context = useContext(ReportContext);

  if (!context) {
    throw new Error(
      "useNotatorTools must be used within a NotatorToolsProvider"
    );
  }

  return context;
}
