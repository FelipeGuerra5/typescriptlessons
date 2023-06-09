"use strict";
// Visibility modifiers
// Normal class
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// IF we add the public to the name on constructor it's marked as redundand,
// so we can use it to eliminate the declaration of params
class Coder2 {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
// to initiate a variable without constructing it:
// secondLang!: string -> used before the constructor. (non Beginner)
const Felipe = new Coder2('Felipe', 'Rock', 47, 'Typescript');
console.log(Felipe.getAge());
// console.log(Felipe.age) // JS would work with it even though TS dosen't like it
// console.log(Felipe.lang) // JS would work with it even though TS dosen't like it
class WebDev extends Coder2 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write in ${this.lang}`;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////////////////////////////
// Static => points only to the class it self, not to be used outside of it.
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Steve.id);
console.log(Amy.id);
console.log(Peeps.count);
///////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Params is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'LedZep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
