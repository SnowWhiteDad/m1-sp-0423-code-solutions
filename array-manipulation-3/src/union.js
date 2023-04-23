/* exported union */
function union(first, second) {
  const result = [...first];
  for (const item of second) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
