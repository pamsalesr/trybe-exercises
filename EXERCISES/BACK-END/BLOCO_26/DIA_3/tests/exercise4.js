const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const { writeFile } = require('../exercise4');

const OK = 'ok';

describe('When calling writeFile function', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('The return', () => {
    const result = writeFile('../file.txt', 'node.js is sweet as a nut');
    it('should be a string', () => {
      expect(result).to.be.a('string');
    });

    it('should return "ok"', () => {
      expect(result).to.be.equal(OK);
    });
  });
});