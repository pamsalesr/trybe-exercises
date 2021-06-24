const { expect } = require('chai');
const { naturalNumber } = require('../exercise1');

const POSITIVO = 'positivo';
const NEGATIVO = 'negativo';
const NEUTRO = 'neutro';
const NOTANUMBER = 'o valor deve ser um número';

describe('When calling naturalNumber function', () => {
  describe('If number is bigger than zero', () => {
    const result = naturalNumber(5);
    it('should be a string', () => {
      expect(result).to.be.a('string');
    });

    it('should return "positivo"', () => {
      expect(result).to.be.equal(POSITIVO);
    });
  });
  describe('If number is smaller than zero', () => {
    const result = naturalNumber(-5);
    it('should be a string', () => {
      expect(result).to.be.a('string');
    });
    
    it('should return "negativo"', () => {
      expect(result).to.be.equal(NEGATIVO);
    });
  });
  describe('If number is equal to zero', () => {
    const result = naturalNumber(0);
    it('should be a string', () => {
      expect(result).to.be.a('string');
    });
    
    it('should return "neutro"', () => {
      expect(result).to.be.equal(NEUTRO);
    });
  });
  describe('If param is not a number', () => {
    const result = naturalNumber('string');
    it('should be a string', () => {
      expect(result).to.be.a('string');
    });
    
    it('should return "o valor deve ser um número"', () => {
      expect(result).to.be.equal(NOTANUMBER);
    });
  });
});