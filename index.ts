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

//hw: 
//use NaN with number variable
//substring
//string comparision
//string template
//bigint -> also difference, product and division of two bigint type

//invoice.js must be written not invoice.ts if written with extension
import {Invoice} from './classes/classes'
import { interfaceWithClass } from './classes/classes'
import { IsPerson } from './interfaces/interface'


const fName:string = 'chintu'
let favInt:number = 83
let favFloat:number = 83.1
let favNeg:number = -83
let isValid:boolean = true

// console.log(favInt);
//toString() method
// console.log(favInt.toString());
// console.log(favFloat);
// console.log(favNeg);

//type inference
let character = 'mario'
// character = 10
let names = ['chintu', 'utkarsh']
// names.push(1)
let arr = ['chintu', 1]
arr.push('utkarsh')
arr.push(2)

//explicitly defining data type
let stringArray: string[] = ['chintu', 'utkarsh']

//mixed data types
let myArray: (string|number)[] = ['chintu', 1]
let uid: string|number
uid = 'chintu'
uid = 1
// uid = true


let ninja = {
    name: 'mario',
    age: 20
}

ninja.age = 40
ninja.name = 'chintu'
// ninja.age = '40'
// ninja.name = 1
// ninja.skills = 'fight'

//redeclaration of objects must have all the same properties as before

let myObject:object

myObject = {
    name: 'mario',
    age: 20
}

myObject = []
//possible because arrays are a kind of object

let ninjaTwo : {
    name: string,
    age: number
}
//object of this blueprint is only allowed even with any type

let anyType:any
anyType = 'chintu'
anyType = 1
anyType = false

let anyArray: any[] = []
anyArray.push('chintu')
anyArray.push(1)
anyArray.push(false)

let greet:Function

greet = () => {
    console.log('greetings');
    
}
// greet()

const add = (a:number, b:number):number => {
    return a + b
}
let result = add(15, 15)
// console.log(result);

//void and undefined are same in js but different in ts
const addAgain = (a:number, b:number = 5, c?:number):void => {
    console.log(a + b)
    console.log(c)
}
// addAgain(5)
//b is default parameter here if not provided as an argument
//c is optional parameter here
//they should be at the end of the parameters

//type aliases
type StringOrNum = string|number
let alias:StringOrNum

type objWithName = {name:string, age:number}
let aliasObject: objWithName

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

const myInvoice = new Invoice('mario', 'work on the mario website', 250)
// console.log(myInvoice.format());
// console.log(myInvoice.client);
// console.log(myInvoice.details);
// console.log(myInvoice.amount);
let invoices: Invoice[] = []
invoices.push(myInvoice)

//in this shorthand way, access modifiers must be explicitly written
class InvoiceShorthand {
    constructor(
        readonly client: string,
        public details: string,
        private amount: number
    ){}
}
const myInvoiceShort = new InvoiceShorthand('mario', 'work on the mario website', 250)
// console.log(myInvoiceShort.client);
// console.log(myInvoiceShort.details);

//modules
//tsconfig -> module change from "commonjs" to "es2015" -> "commonjs" is working and not "es2015"
//tsconfig -> target change from "es5" to "es6"
//index.html -> add type="module" in script tag
//check import syntax at the top
//only modern browsers support modules
//separate js files are created and not single for index.ts and invoice.ts in this example
//to overcome that webpacks are used

//interfaces
//only in ts
//similar to class without constructor and methods having explicit declarations without any code inside them
//used to define structure of objects
//check for invoice.ts

interface IsPersonAlso {
    name: string
    age: number
    speak(a:string):void
    
}

let me: IsPersonAlso = {
    name: 'utkarsh',
    age: 20,
    speak(text:string):void{
        console.log(text)
    }
}

//undefined is fine
let you: IsPersonAlso

//interface with classes
//check imported class and interface
//class with interface must have its structure and can have additional things also

//this is perfectly fine as the class has implemented the interface (we used implements keyword)
let person: IsPerson
person = new interfaceWithClass('chintu', 20)

// console.log('sab sahi chal rha h');

//rendering an html template -> explore more
//checkout template.ts
//the template is used with the project in the playlist

//generics -> explore
//only in ts
//confusing
