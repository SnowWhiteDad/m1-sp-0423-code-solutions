/* exported takeRight */
function takeRight(array, count) {
  let startIndex = 0;
  if (count <= array.length) {
    startIndex = array.length - count;
  }

  /* let startIndex = array.length - count < 0 ? 0 : array.length - count; */

  const result = [];

  for (let i = startIndex; i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}
