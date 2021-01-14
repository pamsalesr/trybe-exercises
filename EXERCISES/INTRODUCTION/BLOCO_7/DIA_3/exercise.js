const assert = require('assert');
/*
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
*/
const sum = (a, b) => a + b;
/* Teste se o retorno de sum(4, 5) é 9 */
const expected = (sum(4, 5));
assert.strictEqual(expected, 9, 'A soma deve ser 9');

/* Teste se o retorno de sum(0, 0) é 0 */
assert.strictEqual(sum(0, 0), 0, 'A soma deve ser zero');

/* Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5) */
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);