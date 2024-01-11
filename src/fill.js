function fill(array, value, start = 0, end = array.length) {
  start = Math.max(0, start);
  end = Math.min(array.length, end);

  for (let i = start; i < end; i++) {
    array[i] = value;
  }

  return array; // Returning the original array after mutation
}

module.exports = { fill };
