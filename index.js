const courts = require('./data/courts');

function checkCnjValidator(NNNNNNN, DD, AAAA, J, TR, OOOO) {
  const nnnnnnn = `${NNNNNNN}`.padStart(7, '0');
  const dd = `${DD}`.padStart(2, '0');
  const aaaa = `${AAAA}`.padStart(4, '0');
  const tr = `${TR}`.padStart(2, '0');
  const j = `${J}`.substring(0, 1);
  const oooo = `${OOOO}`.padStart(4, '0');

  const mod1 = nnnnnnn % 97;
  const value1 = mod1 + aaaa + j + tr;
  const mod2 = value1 % 97;
  const value2 = mod2 + oooo + dd;
  return ((value2 % 97) === 1);
}

function genCnjValidator(NNNNNNN, AAAA, J, TR, OOOO) {
  const nnnnnnn = `${NNNNNNN}`.padStart(7, '0');
  const aaaa = `${AAAA}`.padStart(4, '0');
  const tr = `${TR}`.padStart(2, '0');
  const j = `${J}`.substring(0, 1);
  const oooo = `${OOOO}`.padStart(4, '0');

  const block1 = NNNNNNN + aaaa;
  const mod1 = parseInt(block1, 10) % 97;
  const value1 = mod1 * 1000000000;
  const block2 = j + tr + oooo;
  const value2 = parseInt(block2, 10) * 100;
  const mod2 = (value1 + value2) % 97;

  const dd = `${(98 - mod2)}`.padStart(2, '0');

  const cnj = `${nnnnnnn}-${dd}.${aaaa}.${J}.${tr}.${oooo}`;

  return cnj;
}

function splitCnj(cnj) {
  if (!cnj) {
    return ['0000000', '00', '0000', '0', '00', '0000'];
  }
  const notNumber = /^0+|[^\d]+/g;
  const cnjRegExp = /(\d{1,7})-?(\d{1,2}).?(\d{1,4}).?(\d{1}).?(\d{1,2}).?(\d{1,4})/;
  const splitted = cnj.split(notNumber);

  let NNNNNNN;
  let DD;
  let AAAA;
  let J;
  let TR;
  let OOOO;

  if (cnj.match(notNumber) && cnj.match(cnjRegExp) && splitted.length === 6) {
    NNNNNNN = `${splitted[0].replace(notNumber, '')}`.padStart(7, '0');
    DD = `${splitted[1].replace(notNumber, '')}`.padStart(2, '0');
    AAAA = `${splitted[2].replace(notNumber, '')}`.padStart(4, '0');
    J = `${splitted[3].replace(notNumber, '')}`.padStart(1, '0');
    TR = `${splitted[4].replace(notNumber, '')}`.padStart(2, '0');
    OOOO = `${splitted[5].replace(notNumber, '')}`.padStart(4, '0');
  }
  const standard = NNNNNNN && DD && AAAA && J && TR && OOOO
    && NNNNNNN.length <= 7
    && DD.length <= 2
    && AAAA.length <= 4
    && J.length <= 1
    && TR.length <= 2
    && OOOO.length <= 4;

  if (!standard) {
    const number = `${cnj.replace(notNumber, '')}`.padStart(20, '0');

    NNNNNNN = number.substring(0, 7);
    DD = number.substring(7, 9);
    AAAA = number.substring(9, 13);
    J = number.substring(13, 14);
    TR = number.substring(14, 16);
    OOOO = number.substring(16, 20);
  }
  return [NNNNNNN, DD, AAAA, J, TR, OOOO];
}

// Utilizar para verificar se o número cnj é válido sem o digito verificador
function validCnj(number) {
  const cnj = splitCnj(number);
  const verified = checkCnjValidator(...cnj);
  if (!verified) {
    return verified;
  }
  const [, , , J, TR] = cnj;
  if (courts[J] && courts[J][TR]) {
    return true;
  }
  return false;
}

function originCnj(number) {
  const valid = validCnj(number);
  if (!valid) {
    return false;
  }
  const cnj = splitCnj(number);
  const [, , , J, TR] = cnj;
  return courts[J][TR];
}


function fakeCnj() {
  const Js = Object.keys(courts);
  const J = Js[Math.floor(Math.random() * Js.length)];
  const TRs = Object.keys(courts[J]);
  const TR = TRs[Math.floor(Math.random() * TRs.length)];
  const yearLength = Math.floor((new Date().getFullYear() - 1995) / 1) + 1;
  const AAAAs = Array(yearLength).fill().map((_, idx) => 1995 + (idx * 1));
  const AAAA = AAAAs[Math.floor(Math.random() * AAAAs.length)];
  const OOOO = Math.random() < 0.5 ? '0000' : '0001';
  const NNNNNNN = Math.round(Math.random() * 1000000);
  const nup = genCnjValidator(NNNNNNN, AAAA, J, TR, OOOO);
  const origin = courts[J][TR];
  return { nup, origin };
}

function cleanCnj(cnj) {
  const splited = splitCnj(cnj);
  const cleaned = splited.join('');
  return cleaned;
}

function formatCnj(num) {
  const a = splitCnj(num);
  const cnj = `${a[0]}-${a[1]}.${a[2]}.${a[3]}.${a[4]}.${a[5]}`;
  return cnj;
}

module.exports = {
  checkCnjValidator,
  genCnjValidator,
  splitCnj,
  validCnj,
  originCnj,
  fakeCnj,
  cleanCnj,
  formatCnj,
};
