import { useContext } from "react";
import { EventContext } from "./context";

export function useNotatorTools() {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error(
      "useNotatorTools must be used within a NotatorToolsProvider"
    );
  }

  return context;
}
