/* exported flatten */
function flatten(array) {
  const result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      for (const subitem of item) {
        result.push(subitem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}
