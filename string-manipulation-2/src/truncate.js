/* exported truncate */
function truncate(length, string) {
  let result = '';

  for (let i = 0; i < length; i++) {
    if (i >= string.length) {
      result += '...';
      break;
    }
    result += string[i];
  }

  if (string.length <= length) {
    return string + '...';
  }

  return result + '...';
}

/*
function truncate(length, string) {
  if (string.length <= length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
*/
