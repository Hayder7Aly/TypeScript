// ? means that it is optional 

interface userInterface {
    readonly id : number,
    name : string,
    age? :number,
    speak(a : string): void,
    send(a : number) : number

}

const user1: userInterface = {
    id : 1,
    name : 'Peter',
    speak(message : string){
        console.log(message)
    },
    send(amount : number){
        console.log("amout is : ", amount)
        return amount ;

    }
}

const greetUser = (person : userInterface)=>{
    console.log(person.name)
    console.log(person.id)
    person.speak('some is that')
    person.send(1000)
     
}

greetUser(user1)

// user1.id = 5; // error because id is readonly 

type Func = (x:number ,y:number)=>number
const mul: Func = (x:number, y:number) => x * y;
console.log(mul(3,5))

interface MathFunc {
    (x:number , y:number): number
}

const add: MathFunc = (x:number , y: number) =>x + y
const subtract: MathFunc = (x:number , y: number) =>x - y 