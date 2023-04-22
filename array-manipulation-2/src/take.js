/* exported take */
function take(array, count) {
  const result = [];

  for (let i = 0; i < count && i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}
