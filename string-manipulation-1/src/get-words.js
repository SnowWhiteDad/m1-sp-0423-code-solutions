/* exported getWords */
function getWords(string) {
  const words = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      end = i;
      words.push(string.slice(start, end));
      start = i + 1;
    }
  }

  if (start < string.length) {
    words.push(string.slice(start));
  }

  return words;
}

/*
function getWords(string) {
  return string.trim().split(/\s+/);
}
*/
