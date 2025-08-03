module.exports = function toReadable(number) {
  const alphabetic = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  }
  // number < 20 ? return : go to tens

  const tens = {
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  }


  const hundred = {
    100: "hundred",
  }

  const thousand = {
    1000: "thousand",
  }


  throw new Error('Not implemented');
};


//test

function theHuh(num) {
  aboveHun = 0;
  aboveTen = 0;
  aboveOne = 0;
  result = '';
  if (num > 100) {
    aboveHun = Math.floor(num / 100)
    aboveTen = num % 100
    aboveOne = num % 10
  }
  console.log(aboveHun)
  console.log(aboveTen)
  console.log(aboveOne)
}