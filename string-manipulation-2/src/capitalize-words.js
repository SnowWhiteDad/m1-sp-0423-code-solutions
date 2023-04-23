/* exported capitalizeWords */
function capitalizeWords(string) {
  let capitalizedWords = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      capitalizedWords += string[i].toUpperCase();
    } else {
      capitalizedWords += string[i].toLowerCase();
    }
  }
  return capitalizedWords;
}
