function lastIndexOf(array, element) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1; // Return -1 if the element is not found
}

module.exports = { lastIndexOf };
