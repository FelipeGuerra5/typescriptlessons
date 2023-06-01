let stringArr = [
    'one',
    'jey',
    'Dave'
]

let guitars = [
    'strat',
    'Les Paul',
    5150
]

let mixedData = [
    'EVH',
    1984,
    true
]

stringArr[0] = 'Jonh'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')


guitars = stringArr

// // Cannot accept for the trinArr is only string
// stringArr = guitars

let test = [] // Will be type any
let bands: string[] = [] // Will be set as type string
bands.push('Van Halen')

// The array accept all the types you set it to, however
//  if you what to be restrict about the position of each type you should use Tuples

// Specific types that only accept itens in such position to be such types
let myTuple: [string, number, boolean] = ['Dave', 42, true] 

// Union type that accepts all the types in any position 
let mixed = ['Dave', 42, true]  

// myTuple = mixed -> will complain
mixed = myTuple // Will be accepted

// Objects
let myObj: Object

// It is assignable for its type object
// All the possibilities bellow will be accepted
myObj = []
myObj = bands
myObj = {}

const exampleObject = {
    prop1: 'Felipe',
    prop2: true
}

exampleObject.prop1 = 'Guerra'

// To create a object that is conformed to specific types
type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name:  'Eddie',
    active: false,
    albums: [1984, 5150, 'OUT812']
}

let jp: Guitarist = {
    name:  'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp // It will work for both are guitarist types

// To make a property in a object optional we can insert a ? before the :

type Guitarist2 = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

const greetGuitarists = (guitarist: Guitarist) => { 
    return `Hello ${guitarist.name}!`
}
// in case of a optional type if we call a method on it TypeScript will complain 
// We could do the following
const greetGuitarists2 = (guitarist: Guitarist) => { 
    // We need to give it the possibility to be undefined as well
    return `Hello ${guitarist.name?.toLocaleUpperCase()}!`

}

console.log(greetGuitarists(jp))

//  A interface is possible too
// The interface should be thought more a class definition no a object defintion 
interface person {
    name: string,
    age: number
}

// Enums - Is another fetures of TypeScript (does not existis in JS)
//  It automatically assigns the 0 to the first item and so on.
// If you whant to use start at other number you just assign it to the enum,
enum Grade {
    U = 4,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)
console.log(Grade.A)