import { createContext } from "react";
import { ComplexFormToolModules } from "./modules";

export const ReportContext = createContext<ComplexFormToolModules | undefined>(undefined);
