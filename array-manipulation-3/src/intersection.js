/* exported intersection */
function intersection(first, second) {
  const result = [];
  for (const item of first) {
    if (second.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}
