/* exported unique */

function unique(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

/*
function unique(array) {
  const set = new Set();
  const result = [];
  for (const item of array) {
    if (!set.has(item)) {
      set.add(item);
      result.push(item);
    }
  }
  return result;
}
*/
