function concat(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    result.push(array2[j]);
  }

  return result;
}

module.exports = { concat };
