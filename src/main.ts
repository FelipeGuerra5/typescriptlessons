let myName: string = 'Dave'
let meaningOfLife: number
let isLoading: boolean
// It let all types to be assigned to the any type
let album: any

// // Instead we can do the union type not limited to 2 data types
// let album: string | number

myName = 'jonh'
meaningOfLife = 42
isLoading = true
album = 1924

const sum = (a:  number, b: number ) => { 
    return a + b
 }

let postId: string | number
let isActive: number | boolean

// In the case of a program were you use a variable you cannot figure out the type.
// As the RegExp, you insert it and then jsut see the suggested type in TS
// let re = /\w+/g
let re: RegExp = /\w+/g
