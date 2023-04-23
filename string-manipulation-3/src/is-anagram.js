/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const normalize = (string) => string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizedFirstString = normalize(firstString);
  const normalizedSecondString = normalize(secondString);
  if (normalizedFirstString.length !== normalizedSecondString.length) {
    return false;
  }
  const firstCharCounts = {};
  for (const char of normalizedFirstString) {
    firstCharCounts[char] = (firstCharCounts[char] || 0) + 1;
  }
  for (const char of normalizedSecondString) {
    if (!firstCharCounts[char]) {
      return false;
    }
    firstCharCounts[char]--;
  }
  return true;
}
