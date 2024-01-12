"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interfaceWithClass = exports.Invoice = void 0;
class Invoice {
    //constructor is written like this
    //without constructor or initialization of data members, errors will be encountered
    constructor(c, d, e) {
        this.client = c;
        this.details = d;
        this.amount = e;
    }
    //methods are written without the keyword "function"
    format() {
        // this.client = 'chintu'
        return `${this.client} owes Rs.${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
class interfaceWithClass {
    constructor(name, age) { }
    speak(a) {
        console.log(a);
    }
}
exports.interfaceWithClass = interfaceWithClass;
