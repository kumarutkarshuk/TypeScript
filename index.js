"use strict";
//a valid js code is also a valid ts code
//tsconfig.json -> tsc --init
//rootdir (include) and outdir in tsconfig -> net ninja lec 7
//will get an error if variable of same name is there in another opened file also
//const and let keywords are relatively new in js hence after compilation, const get converted to var
//number multiplied by string is NaN
//arrays, functions and objects are also a type and can't be changed in ts once declared
//any operation on undefined gives error
//undefined is also a data type
//tsc FILENAMEHERE -w -> to auto convert to js
//we can't directly type "node index.ts" in the terminal
//tsconfig.json is also involved in tsc command
Object.defineProperty(exports, "__esModule", { value: true });
//hw: 
//use NaN with number variable
//substring
//string comparision
//string template
//bigint -> also difference, product and division of two bigint type
//invoice.js must be written not invoice.ts if written with extension
const classes_1 = require("./classes/classes");
const classes_2 = require("./classes/classes");
const fName = 'chintu';
let favInt = 83;
let favFloat = 83.1;
let favNeg = -83;
let isValid = true;
// console.log(favInt);
//toString() method
// console.log(favInt.toString());
// console.log(favFloat);
// console.log(favNeg);
//type inference
let character = 'mario';
// character = 10
let names = ['chintu', 'utkarsh'];
// names.push(1)
let arr = ['chintu', 1];
arr.push('utkarsh');
arr.push(2);
//explicitly defining data type
let stringArray = ['chintu', 'utkarsh'];
//mixed data types
let myArray = ['chintu', 1];
let uid;
uid = 'chintu';
uid = 1;
// uid = true
let ninja = {
    name: 'mario',
    age: 20
};
ninja.age = 40;
ninja.name = 'chintu';
// ninja.age = '40'
// ninja.name = 1
// ninja.skills = 'fight'
//redeclaration of objects must have all the same properties as before
let myObject;
myObject = {
    name: 'mario',
    age: 20
};
myObject = [];
//possible because arrays are a kind of object
let ninjaTwo;
//object of this blueprint is only allowed even with any type
let anyType;
anyType = 'chintu';
anyType = 1;
anyType = false;
let anyArray = [];
anyArray.push('chintu');
anyArray.push(1);
anyArray.push(false);
let greet;
greet = () => {
    console.log('greetings');
};
// greet()
const add = (a, b) => {
    return a + b;
};
let result = add(15, 15);
// console.log(result);
//void and undefined are same in js but different in ts
const addAgain = (a, b = 5, c) => {
    console.log(a + b);
    console.log(c);
};
let alias;
let aliasObject;
//function signatures -> used like types -> not working
// let funcSignature: (a:number) => void
//parameter name can be anything
// funcSignature = (num: number) => {
// console.log(num);
// return num;
// }
// let resultTwo = funcSignature(1)
// console.log(resultTwo);
//hover over for inferred special type -> not in the case if class name is used inside querySelector
// const anchor  = document.querySelector('a')!
// console.log(anchor.href);
//without ! it would give error
//to tell compiler that it's not null and make it of a special type -> typecasting
// const form = document.querySelector('.myForm') as HTMLFormElement
// form.addEventListener('submit', (e:Event)=>{
//     e.preventDefault()
//     console.log('Hello');
// })
//explore: input tag's valueAsNumber property
//classes -> by default public members
// class Invoice {
//     readonly client: string
//     public details: string
//     private amount: number
//     //constructor is written like this
//     //without constructor or initialization of data members, errors will be encountered
//     constructor(c:string, d:string, e:number){
//         this.client = c
//         this.details = d
//         this.amount = e
//     }
//     //methods are written without the keyword "function"
//     format(){
//         // this.client = 'chintu'
//         return `${this.client} owes Rs.${this.amount} for ${this.details}`
//     }
// }
const myInvoice = new classes_1.Invoice('mario', 'work on the mario website', 250);
// console.log(myInvoice.format());
// console.log(myInvoice.client);
// console.log(myInvoice.details);
// console.log(myInvoice.amount);
let invoices = [];
invoices.push(myInvoice);
//in this shorthand way, access modifiers must be explicitly written
class InvoiceShorthand {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
}
const myInvoiceShort = new InvoiceShorthand('mario', 'work on the mario website', 250);
let me = {
    name: 'utkarsh',
    age: 20,
    speak(text) {
        console.log(text);
    }
};
//undefined is fine
let you;
//interface with classes
//check imported class and interface
//class with interface must have its structure and can have additional things also
//this is perfectly fine as the class has implemented the interface (we used implements keyword)
let person;
person = new classes_2.interfaceWithClass('chintu', 20);
// console.log('sab sahi chal rha h');
//rendering an html template -> explore more
//checkout template.ts
//the template is used with the project in the playlist
