//  classes in TypeScript

interface PersonInterface{ // beter for classes and objects it is also called type advantage : more functionality 
    id : number,
    name : string,
    register():string

}

type inter = { // better for creat own type
    id : number,
    name : string,
    register():string
}

class Person implements PersonInterface {
    // private , protected and public 
    id : number
    name : string

    constructor(id: number , name: string){
        this.id = id;
        this.name = name;
    }

    register(){
        this.id = 5
        return `${this.name} is now register`
    
    }

}

class Employee extends Person{
    position: string;
    constructor(id:number , name: string, position: string){
        super(id,name)
        this.position = position
    }
    
}


const brad = new Person(1, "Brad")
const hayder = new Person(2, "Hayder")
// console.log(brad , hayder)

// // brad.id = 5 !!! error becuase property accesment is only allow in class
// console.log(brad.register())
// console.log(brad)


const emp = new Employee(3,'Jutt','Developer')
console.log(emp.register())