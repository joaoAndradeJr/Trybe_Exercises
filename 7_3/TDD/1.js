// Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');

const addOne = (arr) => {
  let novoArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    novoArray[index] = arr[index] + 1;
  }
  return novoArray;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
