'use strict';

/*
instructions:
The decimal number, 585, is 1001001001 in binary, and is palindromic in both bases.
Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
(Please note that the palindromic number, in either base, may not include leading zeros.)
– from Problem 36 - Project Euler
*/

/*
planning:
-convert decimal numbers to binary function  dec.toString(2);
-check if decimal number is palindromic
-check if binary number is palindromic
-find sum of all numbers that are palindromic in both binary and decimal, less than one million.
*/

let total = 0;
let max = 1000000;

let decPalin = function (x) {
  let string = x.toString();
  let revString = string.split('').reverse().join('');
  let bool = false;

  if (string === revString) {
    //console.log(string);
    //console.log(revString);
    bool = true;
  }

  return bool;
};

let biPalin = function (x) {
  let string = x.toString(2);
  let revString = string.split('').reverse().join('');
  let bool = false;

  if (string === revString) {
    //console.log(string);
    //console.log(revString);
    bool = true;
  }

  return bool;
};

let eightPalin = function (x) {
  let string = x.toString(8);
  let revString = string.split('').reverse().join('');
  let bool = false;

  if (string === revString) {
    //console.log(string);
    //console.log(revString);
    bool = true;
  }

  return bool;
};

for (let i = 0; i < max; i++) {
  if (decPalin(i) && biPalin(i) && eightPalin(i)) {
    //console.log(i);
    total = total + i;
  }
}
console.log('The sum is: ' + total);




module.exports = () => {
  return true;
};
