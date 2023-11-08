import { createContext } from "react";
import { NotatorToolsProviderProps } from "./tools";

export const EventContext = createContext<
  NotatorToolsProviderProps | undefined
>(undefined);
