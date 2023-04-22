/* exported dropRight */
function dropRight(array, count) {
  let endIndex = 0;
  if (count <= array.length) {
    endIndex = array.length - count;
  }

  /* let endIndex = array.length - count < 0 ? 0 : array.length - count; */
  const result = [];

  for (let i = 0; i < endIndex; i++) {
    result.push(array[i]);
  }

  return result;
}
