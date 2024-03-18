"use strict";
let array = [1, 2, 3, 4];
let array2 = [1, 2, 3, "A", "B"];
// assignment 2 week 1
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}
console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
// assignment 4
let arr;
// 1
arr = [
    1,
    2,
    3,
    [true, false, true],
    ["string", "str", ["string", 1, 2], ["str", 3, 4]],
];
