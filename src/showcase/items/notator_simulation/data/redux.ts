export function useSelector(selectFunction: () => any) {
  return selectFunction();
}

export function selectStateInUS() {
  return "TX";
}
