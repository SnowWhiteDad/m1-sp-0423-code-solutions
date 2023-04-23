/* exported zip */
function zip(first, second) {
  const result = [];
  const length = Math.min(first.length, second.length);
  for (let i = 0; i < length; i++) {
    result.push([first[i], second[i]]);
  }
  return result;
}
