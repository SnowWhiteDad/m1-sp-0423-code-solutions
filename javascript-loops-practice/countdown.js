/* exported countdown */
function countdown(number) {
  const result = [];
  for (let i = number; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
