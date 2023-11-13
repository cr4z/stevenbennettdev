import { createContext } from "react";
import { NotatorToolModules } from "./modules";

export const ReportContext = createContext<NotatorToolModules | undefined>(
  undefined
);
