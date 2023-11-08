import { EventContext } from "./context";
import { useNotatorToolsProviderProps } from "./tools";

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  const notatorToolsProviderProps = useNotatorToolsProviderProps();

  return (
    <EventContext.Provider value={notatorToolsProviderProps}>
      {props.children}
    </EventContext.Provider>
  );
}
