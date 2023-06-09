"use strict";
// Convert to more or less specific type
let a = 'Hello';
let b = a; // Less specific
let c = a; // more specific
let d = 'world';
let e = 'world'; // This syntax cannot be used in React
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// I know better than you
let myVal = addOrConcat(2, 2, "concat");
// Be careful the TS does not see a problem in it But String will be returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string // TS will complain about it
10; // TS wont complain about it, be careful!
// The DOM
const img = document.querySelector('img'); // ! = "Non Null assertion"
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); // Won't work in react
img.src;
myImg.src;
nextImg.src;
