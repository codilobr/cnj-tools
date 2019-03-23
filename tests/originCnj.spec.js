const chai = require('chai');

const { expect } = chai;

const { originCnj } = require('..');

describe('originCnj', () => {
  context('valid number 0000001-32.2001.1.01.0001', () => {
    it('0000001-32.2001.1.01.0001', () => {
      const origin = originCnj('0000001-32.2001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-35.0001.1.01.0001', () => {
      const origin = originCnj('0000001-35.0001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('1-32.2001.1.01.0001', () => {
      const origin = originCnj('1-32.2001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('1-35.0001.1.01.0001', () => {
      const origin = originCnj('1-35.0001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('1-32.2001.1.01.1', () => {
      const origin = originCnj('1-32.2001.1.01.1');
      expect(origin).to.equal(false);
    });
    it('1-35.0001.1.01.1', () => {
      const origin = originCnj('1-35.0001.1.01.1');
      expect(origin).to.equal(false);
    });
    it('1-32.2001.1.1.1', () => {
      const origin = originCnj('1-32.2001.1.1.1');
      expect(origin).to.equal(false);
    });
    it('1-35.0001.1.1.1', () => {
      const origin = originCnj('1-35.0001.1.1.1');
      expect(origin).to.equal(false);
    });
    it('1-35.1.1.1.1', () => {
      const origin = originCnj('1-35.1.1.1.1');
      expect(origin).to.equal(false);
    });
    it('00000013220011010001', () => {
      const origin = originCnj('00000013220011010001');
      expect(origin).to.equal(false);
    });
    it('13220011010001', () => {
      const origin = originCnj('13220011010001');
      expect(origin).to.equal(false);
    });
    it('0000001-01.2001.1.01.0001', () => {
      const origin = originCnj('0000001-01.2001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('1-01.2001.1.01.0001', () => {
      const origin = originCnj('1-01.2001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('1-01.2001.1.01.1', () => {
      const origin = originCnj('1-01.2001.1.01.1');
      expect(origin).to.equal(false);
    });
    it('1-01.2001.1.1.1', () => {
      const origin = originCnj('1-01.2001.1.1.1');
      expect(origin).to.equal(false);
    });
    it('00000010120011010001', () => {
      const origin = originCnj('00000010120011010001');
      expect(origin).to.equal(false);
    });
    it('10120011010001', () => {
      const origin = originCnj('10120011010001');
      expect(origin).to.equal(false);
    });
    it('999999/SP originCnj', () => {
      const origin = originCnj('999999/SP');
      expect(origin).to.equal(false);
    });
  });
  context('unknow', () => {
    it('0000001-32.2001.1.01.0001', () => {
      const origin = originCnj('0000001-32.2001.1.01.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-48.2001.2.01.0001', () => {
      const origin = originCnj('0000001-48.2001.2.01.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-64.2001.3.01.0001', () => {
      const origin = originCnj('0000001-64.2001.3.01.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-42.2001.4.06.0001', () => {
      const origin = originCnj('0000001-42.2001.4.06.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-30.2001.5.25.0001', () => {
      const origin = originCnj('0000001-30.2001.5.25.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-62.2001.6.28.0001', () => {
      const origin = originCnj('0000001-62.2001.6.28.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-95.2001.7.13.0001', () => {
      const origin = originCnj('0000001-95.2001.7.13.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-94.2001.8.28.0001', () => {
      const origin = originCnj('0000001-94.2001.8.28.0001');
      expect(origin).to.equal(false);
    });
    it('0000001-40.2001.9.27.0001', () => {
      const origin = originCnj('0000001-40.2001.9.27.0001');
      expect(origin).to.equal(false);
    });
  });
  context('formatado', () => {
    it('0000001-59.2001.1.00.0001 originCnj', () => {
      const origin = originCnj('0000001-59.2001.1.00.0001');
      expect(origin).to.equal('Supremo Tribunal Federal');
    });
    it('0000001-75.2001.2.00.0001 originCnj', () => {
      const origin = originCnj('0000001-75.2001.2.00.0001');
      expect(origin).to.equal('Conselho Nacional de Justiça');
    });
    it('0000001-91.2001.3.00.0001 originCnj', () => {
      const origin = originCnj('0000001-91.2001.3.00.0001');
      expect(origin).to.equal('Superior Tribunal de Justiça');
    });
    it('0000001-05.2001.4.90.0001 originCnj', () => {
      const origin = originCnj('0000001-05.2001.4.90.0001');
      expect(origin).to.equal('Conselho da Justiça Federal');
    });
    it('0000001-80.2001.4.01.0001 originCnj', () => {
      const origin = originCnj('0000001-80.2001.4.01.0001');
      expect(origin).to.equal('Tribunal Regional Federal da 1ª Região');
    });
    it('0000001-53.2001.4.02.0001 originCnj', () => {
      const origin = originCnj('0000001-53.2001.4.02.0001');
      expect(origin).to.equal('Tribunal Regional Federal da 2ª Região');
    });
    it('0000001-26.2001.4.03.0001 originCnj', () => {
      const origin = originCnj('0000001-26.2001.4.03.0001');
      expect(origin).to.equal('Tribunal Regional Federal da 3ª Região');
    });
    it('0000001-96.2001.4.04.0001 originCnj', () => {
      const origin = originCnj('0000001-96.2001.4.04.0001');
      expect(origin).to.equal('Tribunal Regional Federal da 4ª Região');
    });
    it('0000001-69.2001.4.05.0001 originCnj', () => {
      const origin = originCnj('0000001-69.2001.4.05.0001');
      expect(origin).to.equal('Tribunal Regional Federal da 5ª Região');
    });
    it('0000001-47.2001.5.10.0001 originCnj', () => {
      const origin = originCnj('0000001-47.2001.5.10.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 10ª Região');
    });
    it('0000001-20.2001.5.11.0001 originCnj', () => {
      const origin = originCnj('0000001-20.2001.5.11.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 11ª Região');
    });
    it('0000001-90.2001.5.12.0001 originCnj', () => {
      const origin = originCnj('0000001-90.2001.5.12.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 12ª Região');
    });
    it('0000001-63.2001.5.13.0001 originCnj', () => {
      const origin = originCnj('0000001-63.2001.5.13.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 13ª Região');
    });
    it('0000001-36.2001.5.14.0001 originCnj', () => {
      const origin = originCnj('0000001-36.2001.5.14.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 14ª Região');
    });
    it('0000001-09.2001.5.15.0001 originCnj', () => {
      const origin = originCnj('0000001-09.2001.5.15.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 15ª Região');
    });
    it('0000001-79.2001.5.16.0001 originCnj', () => {
      const origin = originCnj('0000001-79.2001.5.16.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 16ª Região');
    });
    it('0000001-52.2001.5.17.0001 originCnj', () => {
      const origin = originCnj('0000001-52.2001.5.17.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 17ª Região');
    });
    it('0000001-25.2001.5.18.0001 originCnj', () => {
      const origin = originCnj('0000001-25.2001.5.18.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 18ª Região');
    });
    it('0000001-95.2001.5.19.0001 originCnj', () => {
      const origin = originCnj('0000001-95.2001.5.19.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 19ª Região');
    });
    it('0000001-68.2001.5.20.0001 originCnj', () => {
      const origin = originCnj('0000001-68.2001.5.20.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 20ª Região');
    });
    it('0000001-41.2001.5.21.0001 originCnj', () => {
      const origin = originCnj('0000001-41.2001.5.21.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 21ª Região');
    });
    it('0000001-14.2001.5.22.0001 originCnj', () => {
      const origin = originCnj('0000001-14.2001.5.22.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 22ª Região');
    });
    it('0000001-84.2001.5.23.0001 originCnj', () => {
      const origin = originCnj('0000001-84.2001.5.23.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 23ª Região');
    });
    it('0000001-57.2001.5.24.0001 originCnj', () => {
      const origin = originCnj('0000001-57.2001.5.24.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 24ª Região');
    });
    it('0000001-21.2001.5.90.0001 originCnj', () => {
      const origin = originCnj('0000001-21.2001.5.90.0001');
      expect(origin).to.equal('Conselho Superior da Justiça do Trabalho');
    });
    it('0000001-26.2001.5.00.0001 originCnj', () => {
      const origin = originCnj('0000001-26.2001.5.00.0001');
      expect(origin).to.equal('Tribunal Superior do Trabalho');
    });
    it('0000001-96.2001.5.01.0001 originCnj', () => {
      const origin = originCnj('0000001-96.2001.5.01.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 1ª Região');
    });
    it('0000001-69.2001.5.02.0001 originCnj', () => {
      const origin = originCnj('0000001-69.2001.5.02.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 2ª Região');
    });
    it('0000001-42.2001.5.03.0001 originCnj', () => {
      const origin = originCnj('0000001-42.2001.5.03.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 3ª Região');
    });
    it('0000001-15.2001.5.04.0001 originCnj', () => {
      const origin = originCnj('0000001-15.2001.5.04.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 4ª Região');
    });
    it('0000001-85.2001.5.05.0001 originCnj', () => {
      const origin = originCnj('0000001-85.2001.5.05.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 5ª Região');
    });
    it('0000001-58.2001.5.06.0001 originCnj', () => {
      const origin = originCnj('0000001-58.2001.5.06.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 6ª Região');
    });
    it('0000001-31.2001.5.07.0001 originCnj', () => {
      const origin = originCnj('0000001-31.2001.5.07.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 7ª Região');
    });
    it('0000001-04.2001.5.08.0001 originCnj', () => {
      const origin = originCnj('0000001-04.2001.5.08.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 8ª Região');
    });
    it('0000001-74.2001.5.09.0001 originCnj', () => {
      const origin = originCnj('0000001-74.2001.5.09.0001');
      expect(origin).to.equal('Tribunal Regional do Trabalho da 9ª Região');
    });
    it('0000001-63.2001.6.10.0001 originCnj', () => {
      const origin = originCnj('0000001-63.2001.6.10.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Maranhão');
    });
    it('0000001-36.2001.6.11.0001 originCnj', () => {
      const origin = originCnj('0000001-36.2001.6.11.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Mato Grosso');
    });
    it('0000001-09.2001.6.12.0001 originCnj', () => {
      const origin = originCnj('0000001-09.2001.6.12.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Mato Grosso do Sul');
    });
    it('0000001-79.2001.6.13.0001 originCnj', () => {
      const origin = originCnj('0000001-79.2001.6.13.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Minas Gerais');
    });
    it('0000001-52.2001.6.14.0001 originCnj', () => {
      const origin = originCnj('0000001-52.2001.6.14.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Pará');
    });
    it('0000001-25.2001.6.15.0001 originCnj', () => {
      const origin = originCnj('0000001-25.2001.6.15.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral da Paraíba');
    });
    it('0000001-95.2001.6.16.0001 originCnj', () => {
      const origin = originCnj('0000001-95.2001.6.16.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Paraná');
    });
    it('0000001-68.2001.6.17.0001 originCnj', () => {
      const origin = originCnj('0000001-68.2001.6.17.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Pernambuco');
    });
    it('0000001-41.2001.6.18.0001 originCnj', () => {
      const origin = originCnj('0000001-41.2001.6.18.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Piauí');
    });
    it('0000001-14.2001.6.19.0001 originCnj', () => {
      const origin = originCnj('0000001-14.2001.6.19.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Rio de Janeiro');
    });
    it('0000001-84.2001.6.20.0001 originCnj', () => {
      const origin = originCnj('0000001-84.2001.6.20.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Rio Grande do Norte');
    });
    it('0000001-57.2001.6.21.0001 originCnj', () => {
      const origin = originCnj('0000001-57.2001.6.21.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Rio Grande do Sul');
    });
    it('0000001-30.2001.6.22.0001 originCnj', () => {
      const origin = originCnj('0000001-30.2001.6.22.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Rondônia');
    });
    it('0000001-03.2001.6.23.0001 originCnj', () => {
      const origin = originCnj('0000001-03.2001.6.23.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Roraima');
    });
    it('0000001-73.2001.6.24.0001 originCnj', () => {
      const origin = originCnj('0000001-73.2001.6.24.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Santa Catarina');
    });
    it('0000001-46.2001.6.25.0001 originCnj', () => {
      const origin = originCnj('0000001-46.2001.6.25.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Sergipe');
    });
    it('0000001-19.2001.6.26.0001 originCnj', () => {
      const origin = originCnj('0000001-19.2001.6.26.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de São Paulo');
    });
    it('0000001-89.2001.6.27.0001 originCnj', () => {
      const origin = originCnj('0000001-89.2001.6.27.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Tocantins');
    });
    it('0000001-42.2001.6.00.0001 originCnj', () => {
      const origin = originCnj('0000001-42.2001.6.00.0001');
      expect(origin).to.equal('Tribunal Superior Eleitoral');
    });
    it('0000001-15.2001.6.01.0001 originCnj', () => {
      const origin = originCnj('0000001-15.2001.6.01.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Acre');
    });
    it('0000001-85.2001.6.02.0001 originCnj', () => {
      const origin = originCnj('0000001-85.2001.6.02.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Alagoas');
    });
    it('0000001-58.2001.6.03.0001 originCnj', () => {
      const origin = originCnj('0000001-58.2001.6.03.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Amapá');
    });
    it('0000001-31.2001.6.04.0001 originCnj', () => {
      const origin = originCnj('0000001-31.2001.6.04.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Amazonas');
    });
    it('0000001-04.2001.6.05.0001 originCnj', () => {
      const origin = originCnj('0000001-04.2001.6.05.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral da Bahia');
    });
    it('0000001-74.2001.6.06.0001 originCnj', () => {
      const origin = originCnj('0000001-74.2001.6.06.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Ceará');
    });
    it('0000001-47.2001.6.07.0001 originCnj', () => {
      const origin = originCnj('0000001-47.2001.6.07.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Distrito Federal e dos Territórios');
    });
    it('0000001-20.2001.6.08.0001 originCnj', () => {
      const origin = originCnj('0000001-20.2001.6.08.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral do Espírito Santo');
    });
    it('0000001-90.2001.6.09.0001 originCnj', () => {
      const origin = originCnj('0000001-90.2001.6.09.0001');
      expect(origin).to.equal('Tribunal Regional Eleitoral de Goiás');
    });
    it('0000001-79.2001.7.10.0001 originCnj', () => {
      const origin = originCnj('0000001-79.2001.7.10.0001');
      expect(origin).to.equal('10ª Circunscrição Judiciária Militar');
    });
    it('0000001-52.2001.7.11.0001 originCnj', () => {
      const origin = originCnj('0000001-52.2001.7.11.0001');
      expect(origin).to.equal('11ª Circunscrição Judiciária Militar');
    });
    it('0000001-25.2001.7.12.0001 originCnj', () => {
      const origin = originCnj('0000001-25.2001.7.12.0001');
      expect(origin).to.equal('12ª Circunscrição Judiciária Militar');
    });
    it('0000001-58.2001.7.00.0001 originCnj', () => {
      const origin = originCnj('0000001-58.2001.7.00.0001');
      expect(origin).to.equal('Superior Tribunal Militar');
    });
    it('0000001-31.2001.7.01.0001 originCnj', () => {
      const origin = originCnj('0000001-31.2001.7.01.0001');
      expect(origin).to.equal('1ª Circunscrição Judiciária Militar');
    });
    it('0000001-04.2001.7.02.0001 originCnj', () => {
      const origin = originCnj('0000001-04.2001.7.02.0001');
      expect(origin).to.equal('2ª Circunscrição Judiciária Militar');
    });
    it('0000001-74.2001.7.03.0001 originCnj', () => {
      const origin = originCnj('0000001-74.2001.7.03.0001');
      expect(origin).to.equal('3ª Circunscrição Judiciária Militar');
    });
    it('0000001-47.2001.7.04.0001 originCnj', () => {
      const origin = originCnj('0000001-47.2001.7.04.0001');
      expect(origin).to.equal('4ª Circunscrição Judiciária Militar');
    });
    it('0000001-20.2001.7.05.0001 originCnj', () => {
      const origin = originCnj('0000001-20.2001.7.05.0001');
      expect(origin).to.equal('5ª Circunscrição Judiciária Militar');
    });
    it('0000001-90.2001.7.06.0001 originCnj', () => {
      const origin = originCnj('0000001-90.2001.7.06.0001');
      expect(origin).to.equal('6ª Circunscrição Judiciária Militar');
    });
    it('0000001-63.2001.7.07.0001 originCnj', () => {
      const origin = originCnj('0000001-63.2001.7.07.0001');
      expect(origin).to.equal('7ª Circunscrição Judiciária Militar');
    });
    it('0000001-36.2001.7.08.0001 originCnj', () => {
      const origin = originCnj('0000001-36.2001.7.08.0001');
      expect(origin).to.equal('8ª Circunscrição Judiciária Militar');
    });
    it('0000001-09.2001.7.09.0001 originCnj', () => {
      const origin = originCnj('0000001-09.2001.7.09.0001');
      expect(origin).to.equal('9ª Circunscrição Judiciária Militar');
    });
    it('0000001-95.2001.8.10.0001 originCnj', () => {
      const origin = originCnj('0000001-95.2001.8.10.0001');
      expect(origin).to.equal('Tribunal de Justiça do Maranhão');
    });
    it('0000001-68.2001.8.11.0001 originCnj', () => {
      const origin = originCnj('0000001-68.2001.8.11.0001');
      expect(origin).to.equal('Tribunal de Justiça do Mato Grosso');
    });
    it('0000001-41.2001.8.12.0001 originCnj', () => {
      const origin = originCnj('0000001-41.2001.8.12.0001');
      expect(origin).to.equal('Tribunal de Justiça do Mato Grosso do Sul');
    });
    it('0000001-14.2001.8.13.0001 originCnj', () => {
      const origin = originCnj('0000001-14.2001.8.13.0001');
      expect(origin).to.equal('Tribunal de Justiça de Minas Gerais');
    });
    it('0000001-84.2001.8.14.0001 originCnj', () => {
      const origin = originCnj('0000001-84.2001.8.14.0001');
      expect(origin).to.equal('Tribunal de Justiça do Pará');
    });
    it('0000001-57.2001.8.15.0001 originCnj', () => {
      const origin = originCnj('0000001-57.2001.8.15.0001');
      expect(origin).to.equal('Tribunal de Justiça da Paraíba');
    });
    it('0000001-30.2001.8.16.0001 originCnj', () => {
      const origin = originCnj('0000001-30.2001.8.16.0001');
      expect(origin).to.equal('Tribunal de Justiça do Paraná');
    });
    it('0000001-03.2001.8.17.0001 originCnj', () => {
      const origin = originCnj('0000001-03.2001.8.17.0001');
      expect(origin).to.equal('Tribunal de Justiça de Pernambuco');
    });
    it('0000001-73.2001.8.18.0001 originCnj', () => {
      const origin = originCnj('0000001-73.2001.8.18.0001');
      expect(origin).to.equal('Tribunal de Justiça do Piauí');
    });
    it('0000001-46.2001.8.19.0001 originCnj', () => {
      const origin = originCnj('0000001-46.2001.8.19.0001');
      expect(origin).to.equal('Tribunal de Justiça do Rio de Janeiro');
    });
    it('0000001-19.2001.8.20.0001 originCnj', () => {
      const origin = originCnj('0000001-19.2001.8.20.0001');
      expect(origin).to.equal('Tribunal de Justiça do Rio Grande do Norte');
    });
    it('0000001-89.2001.8.21.0001 originCnj', () => {
      const origin = originCnj('0000001-89.2001.8.21.0001');
      expect(origin).to.equal('Tribunal de Justiça do Rio Grande do Sul');
    });
    it('0000001-62.2001.8.22.0001 originCnj', () => {
      const origin = originCnj('0000001-62.2001.8.22.0001');
      expect(origin).to.equal('Tribunal de Justiça de Rondônia');
    });
    it('0000001-35.2001.8.23.0001 originCnj', () => {
      const origin = originCnj('0000001-35.2001.8.23.0001');
      expect(origin).to.equal('Tribunal de Justiça de Roraima');
    });
    it('0000001-08.2001.8.24.0001 originCnj', () => {
      const origin = originCnj('0000001-08.2001.8.24.0001');
      expect(origin).to.equal('Tribunal de Justiça de Santa Catarina');
    });
    it('0000001-78.2001.8.25.0001 originCnj', () => {
      const origin = originCnj('0000001-78.2001.8.25.0001');
      expect(origin).to.equal('Tribunal de Justiça de Sergipe');
    });
    it('0000001-51.2001.8.26.0001 originCnj', () => {
      const origin = originCnj('0000001-51.2001.8.26.0001');
      expect(origin).to.equal('Tribunal de Justiça de São Paulo');
    });
    it('0000001-24.2001.8.27.0001 originCnj', () => {
      const origin = originCnj('0000001-24.2001.8.27.0001');
      expect(origin).to.equal('Tribunal de Justiça de Tocantins');
    });
    it('0000001-47.2001.8.01.0001 originCnj', () => {
      const origin = originCnj('0000001-47.2001.8.01.0001');
      expect(origin).to.equal('Tribunal de Justiça do Acre');
    });
    it('0000001-20.2001.8.02.0001 originCnj', () => {
      const origin = originCnj('0000001-20.2001.8.02.0001');
      expect(origin).to.equal('Tribunal de Justiça de Alagoas');
    });
    it('0000001-90.2001.8.03.0001 originCnj', () => {
      const origin = originCnj('0000001-90.2001.8.03.0001');
      expect(origin).to.equal('Tribunal de Justiça do Amapá');
    });
    it('0000001-63.2001.8.04.0001 originCnj', () => {
      const origin = originCnj('0000001-63.2001.8.04.0001');
      expect(origin).to.equal('Tribunal de Justiça do Amazonas');
    });
    it('0000001-36.2001.8.05.0001 originCnj', () => {
      const origin = originCnj('0000001-36.2001.8.05.0001');
      expect(origin).to.equal('Tribunal de Justiça da Bahia');
    });
    it('0000001-09.2001.8.06.0001 originCnj', () => {
      const origin = originCnj('0000001-09.2001.8.06.0001');
      expect(origin).to.equal('Tribunal de Justiça do Ceará');
    });
    it('0000001-79.2001.8.07.0001 originCnj', () => {
      const origin = originCnj('0000001-79.2001.8.07.0001');
      expect(origin).to.equal('Tribunal de Justiça do Distrito Federal e dos Territórios');
    });
    it('0000001-52.2001.8.08.0001 originCnj', () => {
      const origin = originCnj('0000001-52.2001.8.08.0001');
      expect(origin).to.equal('Tribunal de Justiça do Espírito Santo');
    });
    it('0000001-25.2001.8.09.0001 originCnj', () => {
      const origin = originCnj('0000001-25.2001.8.09.0001');
      expect(origin).to.equal('Tribunal de Justiça de Goiás');
    });
    it('0000001-30.2001.9.13.0001 originCnj', () => {
      const origin = originCnj('0000001-30.2001.9.13.0001');
      expect(origin).to.equal('Tribunal de Justiça Militar de Minas Gerais');
    });
    it('0000001-08.2001.9.21.0001 originCnj', () => {
      const origin = originCnj('0000001-08.2001.9.21.0001');
      expect(origin).to.equal('Tribunal de Justiça Militar do Rio Grande do Sul');
    });
    it('0000001-67.2001.9.26.0001 originCnj', () => {
      const origin = originCnj('0000001-67.2001.9.26.0001');
      expect(origin).to.equal('Tribunal de Justiça Militar de São Paulo');
    });
  });
  context('não formatado', () => {
    it('string', () => {
      const origin = originCnj('string');
      expect(origin).to.equal(false);
    });
    it('string string string string', () => {
      const origin = originCnj('string string string string');
      expect(origin).to.equal(false);
    });
    it('00011268-83.2012.811.0055 originCnj', () => {
      const origin = originCnj('00011268-83.2012.811.0055');
      expect(origin).to.equal('Tribunal de Justiça do Mato Grosso');
    });
    it('506354-19.2011.08.09.0051 originCnj', () => {
      const origin = originCnj('506354-19.2011.08.09.0051');
      expect(origin).to.equal('Tribunal de Justiça de Goiás');
    });
  });
});
