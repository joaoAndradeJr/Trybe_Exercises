// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(0, 0) é 0

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(0, 0), 0);
