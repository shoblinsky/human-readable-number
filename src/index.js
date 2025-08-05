module.exports = function toReadable(number) {
  const alphabetic = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };

  const hundred = 'hundred';

  const thousand = 'thousand';

  let result = '';

  let temporaryNumber = number;

  if (temporaryNumber === 0) return 'zero';
  if (temporaryNumber < 0)
    return 'number below zero, bye, but i can add Math.abs()';

  if (temporaryNumber >= 1000) {
    const thousands = Math.floor(temporaryNumber / 1000);
    result += `${alphabetic[thousands]} ${thousand} `;
    temporaryNumber %= 1000;
  }
  if (temporaryNumber >= 100) {
    const hundreds = Math.floor(temporaryNumber / 100);
    result += `${alphabetic[hundreds]} ${hundred} `;
    temporaryNumber %= 100;
  }

  if (temporaryNumber >= 20) {
    const ten = Math.floor(temporaryNumber / 10);
    result += `${tens[ten]} `;
    temporaryNumber %= 10;
  }

  if (temporaryNumber > 0 && temporaryNumber < 20) {
    result += `${alphabetic[temporaryNumber]} `;
  }
  return result.trim();
};
