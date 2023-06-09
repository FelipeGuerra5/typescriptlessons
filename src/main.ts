
// Visibility modifiers
// Normal class
class Coder {
    name: string
    music: string
    age: number
    lang: string

    constructor(
        name: string,
        music: string,
        age: number,
        lang: string
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
}

// IF we add the public to the name on constructor it's marked as redundand,
// so we can use it to eliminate the declaration of params
class Coder2 {

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Typescript'
    ) {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge() {
        return `Hello I'm ${this.age}`
    }
}

// to initiate a variable without constructing it:
// secondLang!: string -> used before the constructor. (non Beginner)

const Felipe = new Coder2('Felipe', 'Rock', 47, 'Typescript')
console.log(Felipe.getAge())
// console.log(Felipe.age) // JS would work with it even though TS dosen't like it
// console.log(Felipe.lang) // JS would work with it even though TS dosen't like it

class WebDev extends Coder2 {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, music, age)
        this.computer = computer
    }
    public getLang() {
        return `I write in ${this.lang}`
    }
}
/////////////////////////////////////////////////////

// Implementing a interface to a Class
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }

}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

///////////////////////////////////////////////////////

// Static => points only to the class it self, not to be used outside of it.

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }
    public id: number

    constructor(
        public name: string,
    ) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Steve.id)
console.log(Amy.id)
console.log(Peeps.count)

///////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return

        } else throw new Error('Params is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'LedZep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
