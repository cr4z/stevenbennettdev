import { EventContext } from "./context";
import { useAllNotatorToolModules } from "./modules";

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  const allNotatorToolModules = useAllNotatorToolModules();

  return (
    <EventContext.Provider value={allNotatorToolModules}>
      {props.children}
    </EventContext.Provider>
  );
}
