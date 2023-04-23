/* exported difference */
function difference(first, second) {
  const result = [];
  for (const item of first) {
    if (!second.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  for (const item of second) {
    if (!first.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
