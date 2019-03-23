const chai = require('chai');

const { expect } = chai;

const { isCnj } = require('..');

describe('isCnj', () => {
  context('valid number 0000001-32.2001.1.01.0001', () => {
    it('0000001-32.2001.1.01.0001', () => {
      const valid = isCnj('0000001-32.2001.1.01.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-35.0001.1.01.0001', () => {
      const valid = isCnj('0000001-35.0001.1.01.0001');
      expect(valid).to.equal(true);
    });
    it('1-32.2001.1.01.0001', () => {
      const valid = isCnj('1-32.2001.1.01.0001');
      expect(valid).to.equal(true);
    });
    it('1-35.0001.1.01.0001', () => {
      const valid = isCnj('1-35.0001.1.01.0001');
      expect(valid).to.equal(true);
    });
    it('1-32.2001.1.01.1', () => {
      const valid = isCnj('1-32.2001.1.01.1');
      expect(valid).to.equal(true);
    });
    it('1-35.0001.1.01.1', () => {
      const valid = isCnj('1-35.0001.1.01.1');
      expect(valid).to.equal(true);
    });
    it('1-32.2001.1.1.1', () => {
      const valid = isCnj('1-32.2001.1.1.1');
      expect(valid).to.equal(true);
    });
    it('1-35.0001.1.1.1', () => {
      const valid = isCnj('1-35.0001.1.1.1');
      expect(valid).to.equal(true);
    });
    it('1-35.1.1.1.1', () => {
      const valid = isCnj('1-35.1.1.1.1');
      expect(valid).to.equal(true);
    });
    it('00000013220011010001', () => {
      const valid = isCnj('00000013220011010001');
      expect(valid).to.equal(true);
    });
    it('13220011010001', () => {
      const valid = isCnj('13220011010001');
      expect(valid).to.equal(true);
    });
    it('0000001-01.2001.1.01.0001', () => {
      const valid = isCnj('0000001-01.2001.1.01.0001');
      expect(valid).to.equal(false);
    });
    it('1-01.2001.1.01.0001', () => {
      const valid = isCnj('1-01.2001.1.01.0001');
      expect(valid).to.equal(false);
    });
    it('1-01.2001.1.01.1', () => {
      const valid = isCnj('1-01.2001.1.01.1');
      expect(valid).to.equal(false);
    });
    it('1-01.2001.1.1.1', () => {
      const valid = isCnj('1-01.2001.1.1.1');
      expect(valid).to.equal(false);
    });
    it('00000010120011010001', () => {
      const valid = isCnj('00000010120011010001');
      expect(valid).to.equal(false);
    });
    it('10120011010001', () => {
      const valid = isCnj('10120011010001');
      expect(valid).to.equal(false);
    });
  });
  context('invalid number', () => {
    it('0000001-32.2001.1.01.0001', () => {
      const valid = isCnj('0000001-32.2001.1.01.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-48.2001.2.01.0001', () => {
      const valid = isCnj('0000001-48.2001.2.01.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-64.2001.3.01.0001', () => {
      const valid = isCnj('0000001-64.2001.3.01.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-42.2001.4.06.0001', () => {
      const valid = isCnj('0000001-42.2001.4.06.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-30.2001.5.25.0001', () => {
      const valid = isCnj('0000001-30.2001.5.25.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-62.2001.6.28.0001', () => {
      const valid = isCnj('0000001-62.2001.6.28.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-95.2001.7.13.0001', () => {
      const valid = isCnj('0000001-95.2001.7.13.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-94.2001.8.28.0001', () => {
      const valid = isCnj('0000001-94.2001.8.28.0001');
      expect(valid).to.equal(true);
    });
    it('0000001-40.2001.9.27.0001', () => {
      const valid = isCnj('0000001-40.2001.9.27.0001');
      expect(valid).to.equal(true);
    });
  });
  context('valid number não formatado', () => {
    it('string', () => {
      const valid = isCnj('string');
      expect(valid).to.equal(false);
    });
    it('string string string string', () => {
      const valid = isCnj('string string string string');
      expect(valid).to.equal(false);
    });
    it('00011268-83.2012.811.0055 isCnj', () => {
      const valid = isCnj('00011268-83.2012.811.0055');
      expect(valid).to.equal(true);
    });
    it('506354-19.2011.08.09.0051 isCnj', () => {
      const valid = isCnj('506354-19.2011.08.09.0051');
      expect(valid).to.equal(true);
    });
    it('5000.822.53.2013.827.2706 isCnj', () => {
      const valid = isCnj('5000.822.53.2013.827.2706');
      expect(valid).to.equal(true);
    });
    it('999999/SP isCnj', () => {
      const valid = isCnj('999999/SP');
      expect(valid).to.equal(false);
    });
  });
});
