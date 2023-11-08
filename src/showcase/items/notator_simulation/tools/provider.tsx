import { SessionContext } from "./context";
import { useNotatorToolsProviderProps } from "./tools";

export function NotatorToolsProvider(props: { children: React.ReactNode }) {
  const notatorToolsProviderProps = useNotatorToolsProviderProps();

  return (
    <SessionContext.Provider value={notatorToolsProviderProps}>
      {props.children}
    </SessionContext.Provider>
  );
}
