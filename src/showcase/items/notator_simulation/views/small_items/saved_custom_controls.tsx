import { SavedCustomControl } from "./saved_custom_control";

export function SavedCustomControls() {
  return (
    <>
      {savedCustoms.map(() => (
        <SavedCustomControl />
      ))}
    </>
  );
}
