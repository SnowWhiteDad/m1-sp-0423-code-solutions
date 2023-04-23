/* exported omit */
function omit(source, keys) {
  const result = {};
  for (const key in source) {
    let skip = false;
    for (const k of keys) {
      if (key === k) {
        skip = true;
        break;
      }
    }
    if (!skip) {
      result[key] = source[key];
    }
  }
  return result;
}
