/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  [chars[firstIndex], chars[secondIndex]] = [
    chars[secondIndex],
    chars[firstIndex],
  ];
  return chars.join('');
}
