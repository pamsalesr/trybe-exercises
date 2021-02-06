const sum = require('./unit-tests');

describe('sum', () => {
  it('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Throws an error when a string is passed as parameter', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('Throws an error message when a string is passed as a parameter', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(/parameters must be numbers/);
  });
});
