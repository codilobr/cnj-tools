const chai = require('chai');

const { expect } = chai;

const { fakeCnj, originCnj } = require('..');

describe('fakeCnj', () => {
  context('valid number', () => {
    it('random', () => {
      const { nup, origin: expectOrigin } = fakeCnj();
      const origin = originCnj(nup);
      expect(expectOrigin).to.equal(origin);
    });
  });
});
