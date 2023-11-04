import { useContext } from "react";
import { SessionContext } from "../context";

export function useNotatorTools() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error(
      "useNotatorTools must be used within a NotatorToolsProvider"
    );
  }
  return context;
}
