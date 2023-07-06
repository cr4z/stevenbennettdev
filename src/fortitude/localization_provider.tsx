import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function XNGLocalizationProvider(props: { children: React.ReactNode }) {
  return <LocalizationProvider dateAdapter={AdapterDayjs}>{props.children}</LocalizationProvider>;
}

export default XNGLocalizationProvider;
