function invert(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array[i] = array[i] * 1;
    }
    array[i] = array[i] * -1;
  }

  return array;
}
