const chai = require('chai');

const { expect } = chai;

const { split } = require('..');

describe('split', () => {
  context('split number 0000001-32.2001.1.01.0001', () => {
    const cnjArray = ['0000001', '32', '2001', '1', '01', '0001'];
    const cnjArray2 = ['0000001', '35', '0001', '1', '01', '0001'];
    it('0000001-32.2001.1.01.0001', () => {
      const splited = split('0000001-32.2001.1.01.0001');
      expect(splited).to.deep.equal(cnjArray);
    });
    it('1-32.2001.1.01.0001', () => {
      const splited = split('1-32.2001.1.01.0001');
      expect(splited).to.deep.equal(cnjArray);
    });
    it('1-35.0001.1.01.0001', () => {
      const splited = split('1-35.0001.1.01.0001');
      expect(cnjArray2).to.deep.equal(splited);
    });
    it('1-32.2001.1.01.1', () => {
      const splited = split('1-32.2001.1.01.1');
      expect(splited).to.deep.equal(cnjArray);
    });
    it('1-35.0001.1.01.1', () => {
      const splited = split('1-35.0001.1.01.1');
      expect(cnjArray2).to.deep.equal(splited);
    });
    it('1-32.2001.1.1.1', () => {
      const splited = split('1-32.2001.1.1.1');
      expect(splited).to.deep.equal(cnjArray);
    });
    it('1-35.1.1.1.1', () => {
      const splited = split('1-35.1.1.1.1');
      expect(cnjArray2).to.deep.equal(splited);
    });
    it('00000013220011010001', () => {
      const splited = split('00000013220011010001');
      expect(splited).to.deep.equal(cnjArray);
    });
    it('13220011010001', () => {
      const splited = split('13220011010001');
      expect(splited).to.deep.equal(cnjArray);
    });
  });
  context('valid number 00011268-83.2012.811.0055', () => {
    it('00011268-83.2012.811.0055 array', () => {
      const cnjArray = ['0011268', '83', '2012', '8', '11', '0055'];
      const splited = split('00011268-83.2012.811.0055');
      expect(splited).to.deep.equal(cnjArray);
    });
  });
  context('valid number 506354-19.2011.08.09.0051', () => {
    it('506354-19.2011.08.09.0051 array', () => {
      const cnjArray = ['0506354', '19', '2011', '8', '09', '0051'];
      const splited = split('506354-19.2011.08.09.0051');
      expect(splited).to.deep.equal(cnjArray);
    });
  });
  context('valid number 5000.822.53.2013.827.2706', () => {
    it('5000.822.53.2013.827.2706 array', () => {
      const cnjArray = ['5000822', '53', '2013', '8', '27', '2706'];
      const splited = split('5000.822.53.2013.827.2706');
      expect(splited).to.deep.equal(cnjArray);
    });
  });
});
