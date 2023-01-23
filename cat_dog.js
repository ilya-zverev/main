var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears == 1) {
    var cat = 15;
    var dog = 15;
  }
  if (humanYears == 2) {
    var cat = 15 + 9;
    var dog = 15 + 9;
  }
  if (humanYears > 2) {
    var cat = 15 + 9 + (humanYears - 2) * 4;
    var dog = 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, cat, dog];
};
