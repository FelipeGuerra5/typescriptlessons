type One = string
type Two = string | number
type three = 'Hello'

// Convert to more or less specific type
let a: One = 'Hello'
let b = a as Two // Less specific
let c = a as three // more specific

let d = <One>'world'
let e = <string | number>'world' // This syntax cannot be used in React

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    return '' + a + b
}

// I know better than you
let myVal: string = addOrConcat(2, 2, "concat") as string

// Be careful the TS does not see a problem in it But String will be returned
let nextVal: number = addOrConcat(2, 2, "concat") as number

// 10 as string // TS will complain about it
(10 as unknown) as string // TS wont complain about it, be careful!

// The DOM
const img = document.querySelector('img')! // !" Non Null assertion"
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img') // wont work in react

img.src
myImg.src
nextImg.src

