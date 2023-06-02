"use strict";
// interface = alias => This wont Work
// Literal types
let myName;
let userName;
userName = 'Amy';
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
// Arrow functions will work as well
let subtract = function (c, d) {
    return c - d;
};
// // A interface can be used as well although interface it's more like classes.
// interface mathFunction {
//     (a: number, b: number): number
// } 
let multiply = function (c, d) {
    return c * d;
};
logMsg('[Multiplying whit default params]\n' + multiply(2, 2));
logMsg(multiply(2, 3));
let arrowFuncTest = (a, b) => {
    return a + b;
};
// optional parameters
// The optional param must be THE LAST on the list
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 2));
logMsg(sumAll(2, 3));
// If yo what to mark the first argument with default 
// value you should pass the params as well as the first = unddefined
logMsg(sumAll(undefined, 3));
// NOTE: the Default value wont work with the lyteral types
// Rest parameters
// Rest params should come at the end
const total = (a, ...nums) => {
    return nums.reduce(((prev, curr) => prev + curr));
};
logMsg("[total]" + total(1, 2, 3, 4));
// The never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// A infinete loop will return a Never type as well
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// Custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// Use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
