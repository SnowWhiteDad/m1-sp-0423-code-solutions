/* exported numVowels */
function numVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) !== -1) {
      count++;
    }
  }
  return count;
}
