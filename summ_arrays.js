// Sum Numbers
function sum(numbers) {
  if (numbers.length == 0) return 0;
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
