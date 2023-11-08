export default function toggleFromArray<T>(array: T[], value: T) {
  const a = [...array];
  var index = a.indexOf(value);
  if (index === -1) {
    a.push(value);
  } else {
    a.splice(index, 1);
  }
  return a;
}
