"use strict";
// // Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYearas)
// year.textContent = thisYear
// // TS Code Mine
// const year = document.getElementById("year")! as HTMLSpanElement
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear.toString())
// year.textContent = thisYear
// Dave's
// // TS Code 1st variation 
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute("datetime", thisYear.toString())
//     year.textContent = thisYear
// }
// TS Code 2nd variation 
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
