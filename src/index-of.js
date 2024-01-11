function indexOf(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1; // Return -1 if the element is not found
}

module.exports = { indexOf };
