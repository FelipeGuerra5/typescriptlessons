"use strict";
let stringArr = [
    'one',
    'jey',
    'Dave'
];
let guitars = [
    'strat',
    'Les Paul',
    5150
];
let mixedData = [
    'EVH',
    1984,
    true
];
stringArr[0] = 'Jonh';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
// // Cannot accept for the trinArr is only string
// stringArr = guitars
let test = []; // Will be type any
let bands = []; // Will be set as type string
bands.push('Van Halen');
// The array accept all the types you set it to, however
//  if you what to be restrict about the position of each type you should use Tuples
// Specific types that only accept itens in such position to be such types
let myTuple = ['Dave', 42, true];
// Union type that accepts all the types in any position 
let mixed = ['Dave', 42, true];
// myTuple = mixed -> will complain
mixed = myTuple; // Will be accepted
// Objects
let myObj;
// It is assignable for its type object
// All the possibilities bellow will be accepted
myObj = [];
myObj = bands;
myObj = {};
const exampleObject = {
    prop1: 'Felipe',
    prop2: true
};
exampleObject.prop1 = 'Guerra';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OUT812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
evh = jp; // It will work for both are guitarist types
const greetGuitarists = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
// in case of a optional type if we call a method on it TypeScript will complain 
// We could do the following
const greetGuitarists2 = (guitarist) => {
    var _a;
    // We need to give it the possibility to be undefined as well
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}!`;
};
console.log(greetGuitarists(jp));
// Enums - Is another fetures of TypeScript (does not existis in JS)
//  It automatically assigns the 0 to the first item and so on.
// If you whant to use start at other number you just assign it to the enum,
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 4] = "U";
    Grade[Grade["D"] = 5] = "D";
    Grade[Grade["C"] = 6] = "C";
    Grade[Grade["B"] = 7] = "B";
    Grade[Grade["A"] = 8] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.A);
