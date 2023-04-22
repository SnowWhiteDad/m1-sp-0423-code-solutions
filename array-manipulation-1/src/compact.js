/* exported compact */
function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== null &&
      (typeof array[i] === 'object' ||
        isArray(array[i]) ||
        (typeof array[i] === 'string' && array[i] !== ''))
    ) {
      result.push(array[i]);
    } else if (
      array[i] !== '' &&
      array[i] !== '' &&
      array[i] !== null &&
      array[i] !== false &&
      !isNaN(array[i]) &&
      array[i] !== 0 &&
      !Object.is(array[i], -0) &&
      array[i] !== undefined
    ) {
      result.push(array[i]);
    }
  }
  return result;
}

function isArray(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.length === 'number'
  );
}
