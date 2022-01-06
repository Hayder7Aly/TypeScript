// 2 : object, array, tuple ,Enum , Any 


// const person: {
//     name : string;
//     age : number;
// } = {
//     name : 'Hayder Aly',
//     age : 16
// }

// better syntax is that 
// const person: object = {
//     name : 'hayder',
//     age : 15
// }



// const person: {
//     name : string;
//     age : number;
//     hobbies : string[];
//     role : [number,string]
// } = {
//     name : 'Hayder Jutt',
//     age : 16,
//     hobbies : ['sports','Cooking'],
//     role : [2,'author']
// }

// console.log(person.name)

// person.role.push('admin');
// person.role[1] = 'hayder';
// // person.role[1] = 10;  !!! Error !!! 
// person.role = [3,'1']

// // person.role = [2,'haider','ha'] error 
// console.log(person.role)

// let favouriteActivities: any[];
// favouriteActivities = ['sports','football','cricket',1]

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase())
// }



// ENum 

// simple mean 

// enum starts with 0 and setup with increased able 
// enum something {role0 , role1 , role3}
// console.log(something[2])
// console.log(something.role1)

enum Role {ADMIN = 5 , READ_ONlY = 'Hayder' , AUTHOR = 'Maxmillian'};

// const ADMIN = 0;
// const READ_ONly = 10;
// const AUTHOR = 2;

const person = {
    name : 'Hayder Jutt',
    age : 16,
    hobbies : ['sports','Cooking'],
    role : Role.READ_ONlY,
}


console.log(person)


if(person.role == Role.READ_ONlY){
    console.log("IS ADMIN+ YES")
}

