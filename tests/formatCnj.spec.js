const chai = require('chai');

const { expect } = chai;

const { formatCnj } = require('..');

describe('formatCnj', () => {
  context('mount number 0000001-32.2001.1.01.0001', () => {
    const cnj = '0000001-32.2001.1.01.0001';
    const cnj2 = '0000001-35.0001.1.01.0001';
    it('0000001-32.2001.1.01.0001', () => {
      const mounted = formatCnj('0000001-32.2001.1.01.0001');
      expect(cnj).to.deep.equal(mounted);
    });
    it('0000001-35.0001.1.01.0001', () => {
      const mounted = formatCnj('0000001-35.0001.1.01.0001');
      expect(cnj2).to.deep.equal(mounted);
    });
    it('1-32.2001.1.01.0001', () => {
      const mounted = formatCnj('1-32.2001.1.01.0001');
      expect(cnj).to.deep.equal(mounted);
    });
    it('1-35.0001.1.01.0001', () => {
      const mounted = formatCnj('1-35.0001.1.01.0001');
      expect(cnj2).to.deep.equal(mounted);
    });
    it('1-32.2001.1.01.1', () => {
      const mounted = formatCnj('1-32.2001.1.01.1');
      expect(cnj).to.deep.equal(mounted);
    });
    it('1-35.0001.1.01.1', () => {
      const mounted = formatCnj('1-35.0001.1.01.1');
      expect(cnj2).to.deep.equal(mounted);
    });
    it('1-32.2001.1.1.1', () => {
      const mounted = formatCnj('1-32.2001.1.1.1');
      expect(cnj).to.deep.equal(mounted);
    });
    it('1-35.0001.1.1.1', () => {
      const mounted = formatCnj('1-35.0001.1.1.1');
      expect(cnj2).to.deep.equal(mounted);
    });
    it('1-35.1.1.1.1', () => {
      const mounted = formatCnj('1-35.1.1.1.1');
      expect(cnj2).to.deep.equal(mounted);
    });
    it('00000013220011010001', () => {
      const mounted = formatCnj('00000013220011010001');
      expect(cnj).to.deep.equal(mounted);
    });
    it('13220011010001', () => {
      const mounted = formatCnj('13220011010001');
      expect(cnj).to.deep.equal(mounted);
    });
  });
});
