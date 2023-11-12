import { createContext } from "react";
import { NotatorToolModules } from "./modules";

export const EventContext = createContext<
  NotatorToolModules | undefined
>(undefined);
