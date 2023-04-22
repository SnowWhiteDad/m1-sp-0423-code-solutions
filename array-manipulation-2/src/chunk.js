/* exported chunk */
function chunk(array, size) {
  const result = [];
  let subArray = [];

  for (let i = 0; i < array.length; i++) {
    subArray.push(array[i]);

    if (subArray.length === size) {
      result.push(subArray);
      subArray = [];
    }
  }

  if (subArray.length > 0) {
    result.push(subArray);
  }

  return result;
}
