//  Index signatures

// When we need the index to be unknow before while building we can use:
// Index signature, it Says waht type of indexed are allowed and what they expect as value.

// What we normally do - FIRST CASE
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

// SECOND CASE - Whith the index signature
// TS won't complain for the index now has a speceific type.

// // We can also use `readonly` before the index so the value cannot be changed after set.
// interface TransactionObj {
//     readonly [index: string]: number
// }

// We can also use the index signature whith the keys, which will make it required
// It accepts other keys but this one is required.
interface TransactionObj {
    readonly [index: string]: number
    Pizza: -10,
    Books: -5,
    Job: 50
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

// Going to try this:
let prop: string = 'Pizza'
console.log(todaysTransactions[prop]) // TS does not like it in the first case.

const todayNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        // TS does not like it can be any type, On the first case.
        total += transactions[transaction]
    }
    return total
}

console.log(todayNet(todaysTransactions))

// todaysTransaction.Pizza = 40
console.log(todaysTransactions['Dave'])

//////////////////////////////////////////////////////////////////

interface Student {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

//if we try to access it without a index signature TS will complain
// With the contract signature it will not complain and could eb prone to error.
// console.log(student.test)

// If we comment the key signature on the Student the for loop wont interate.
//  to do that without a key signature we can use assertion: "key as keyof Obect"
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

// Use the typeof when we don't know the type of the keys.
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudent = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudent(student, 'GPA')
logStudent(student, 'name')

///////////////////////////////////////

// // Cannot use strign literal in the index signature
// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

//  IF we use Record utility type we are goint to need to assert the key if it doesn't exist on the Obj.
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    //Still have to use assertion keyof even thought we defined without string signature.
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

// Strive for prograss over perfection!