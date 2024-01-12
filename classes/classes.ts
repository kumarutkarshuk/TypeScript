import { IsPerson } from "../interfaces/interface"

export class Invoice {
    readonly client: string
    public details: string
    private amount: number

    //constructor is written like this
    //without constructor or initialization of data members, errors will be encountered
    constructor(c:string, d:string, e:number){
        this.client = c
        this.details = d
        this.amount = e
    }

    //methods are written without the keyword "function"
    format(){
        // this.client = 'chintu'
        return `${this.client} owes Rs.${this.amount} for ${this.details}`
    }
}

export class interfaceWithClass implements IsPerson{
    constructor(
        name:string,
        age:number,
    ){}

    speak(a:string):void{
        console.log(a);
        
    }
} 