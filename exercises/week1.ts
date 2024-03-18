let array: number[] = [1, 2, 3, 4];
let array2: (number | string)[] = [1, 2, 3, "A", "B"];

// assignment 2 week 1
function calculate(numOne: number, numTwo: number) {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

// assignment 3 week 1
type numstr = number | string;

function printInfo(valueOne: numstr, valueTwo: numstr) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// assignment 4

let arr: (number | boolean[] | (string | (string | number)[])[])[];
arr = [
  1,
  2,
  3,
  [true, false, true],
  ["string", "str", ["string", 1, 2], ["str", 3, 4]],
];

// assignemnt 5
// function reportErrors(username, age: number) {
//   //"noImplicitAny": false
//   // "noUnusedParameters": true,
//   let rank = "Professor";
//   // "noUnusedLocals": true,
//   return `Username: ${username}`;
//   console.log("We Will Not Reach Here");
//   // "allowUnreachableCode": false,
// }
// console.log(reportErrors("Elzero", 40));

// assignment 6
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}
// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName)); // Elzero

// assignment 7

function showMsg(user?: string, age?: number, country?: string) {
  return `${user}${age}${country}`;
}

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", +"40", "Egypt"));
