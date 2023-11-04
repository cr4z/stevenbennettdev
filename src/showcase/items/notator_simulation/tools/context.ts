import { createContext } from "react";
import { NotatorToolsProviderProps } from "./types";

export const SessionContext = createContext<
  NotatorToolsProviderProps | undefined
>(undefined);
