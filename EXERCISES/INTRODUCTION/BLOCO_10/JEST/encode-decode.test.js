const { encode } = require('./encode-decode');

describe('Test encode function', () => {
  it('Test if encode is a function', () => {
    expect(typeof encode).toBe('function');
  });
  it('Test if encode is defined', () => {
    expect(encode).toBeDefined();
  });
  it('Test if a is converted to 1', () => {
    expect(encode('ana')).toBe('1n1');
  });
  it('Test if e is converted to 2', () => {
    expect(encode('even')).toBe('2v2n');
  });
  it('Test if i is converted to 3', () => {
    expect(encode('lips')).toBe('l3ps');
  });
  it('Test if o is converted to 4', () => {
    expect(encode('good')).toBe('g44d');
  });
  it('Test if u is converted to 5', () => {
    expect(encode('run')).toBe('r5n');
  });
  it('Test if all vowels are converted to numbers', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  it('Test if the function`s return has the same length as the parameter', () => {
    expect(encode('i love coding').length).toEqual(13);
  });
});