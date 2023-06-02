// These are called alias, as we are giving aliases to the TS types
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserID = stringOrNumber

// interface = alias => This wont Work


// Literal types
let myName: " Felipe"

let userName: " Felipe" | 'Jhon' | 'Amy'
userName = 'Amy'

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello')
logMsg(add(2, 3))

// Arrow functions will work as well
let subtract = function (c: number, d: number): number {
    return c - d
}

// Literal type for functions
type mathFunction = (a: number, b: number) => number

// // A interface can be used as well although interface it's more like classes.
// interface mathFunction {
//     (a: number, b: number): number
// } 


let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg('[Multiplying whit default params]\n' + multiply(2, 2))
logMsg(multiply(2, 3))

let arrowFuncTest: mathFunction = (a, b) => {
    return a + b
}

// optional parameters
// The optional param must be THE LAST on the list
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// Default param value
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3, 2))
logMsg(sumAll(2, 3))

// If yo what to mark the first argument with default 
// value you should pass the params as well as the first = unddefined
logMsg(sumAll(undefined, 3))

// NOTE: the Default value wont work with the lyteral types

// Rest parameters
// Rest params should come at the end
const total = (a: number, ...nums: number[]): number => {
    return nums.reduce(((prev, curr) => prev + curr))
}

logMsg("[total]" + total(1, 2, 3, 4))

// The never type
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

// A infinete loop will return a Never type as well
const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) {
            break
        }
    }
}

// Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// Use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

