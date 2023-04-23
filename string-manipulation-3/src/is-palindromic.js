/* exported isPalindromic */
function isPalindromic(string) {
  const normalizedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}
