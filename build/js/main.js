"use strict";
//  Index signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// Going to try this:
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // TS does not like it in the first case.
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // TS does not like it can be any type, On the first case.
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todaysTransactions));
// todaysTransaction.Pizza = 40
console.log(todaysTransactions['Dave']);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
//if we try to access it without a index signature TS will complain
// With the contract signature it will not complain and could eb prone to error.
// console.log(student.test)
// If we comment the key signature on the Student the for loop wont interate.
//  to do that without a key signature we can use assertion: "key as keyof Obect"
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// Use the typeof when we don't know the type of the keys.
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudent = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudent(student, 'GPA');
logStudent(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    //Still have to use assertion keyof even thought we defined without string signature.
    console.log(monthlyIncomes[revenue]);
}
// Strive for prograss over perfection!
