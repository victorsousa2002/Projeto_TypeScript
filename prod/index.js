"use strict";
// Day 3 - Exercise 1
//let pi = 3.14159;
//let tau = pi * 2;
//console.log(`${tau} is ${pi} times two.`);
// Day 3 - Exercise 2
//let pie: string
//pie = 'blueberry'
//console.log(`I like to eat ${pie}-flavored pie.`)
// Day 3 - Exercise 3
//let isDouglas: boolean = true
//console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)
// Day 3 - Exercise 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
