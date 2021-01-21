const assert = require('assert')

// escreva sum abaixo

const sum = (...rest) => {
  return rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)