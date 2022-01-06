// ///////////////////////////////  1 first example : ///////////////////////////// 

// function printResult(num : number):void{
//     console.log('The result is : ', num)
// }


// let func : Function;
// func = printResult;
// func(5)


// let func : (num : number) => void;
// func = printResult;
// func(5)

//  /////////////////////////////  2 second example:   ///////////////////////////// 

// function usingcb(num: number, num2: number , cb:(result : number) => number):void{
//     const result = num * num2;
//     cb(result)
// }


// usingcb(4,3,(result)=>{
//     console.log('The result is : ',result);
//     return result;
// })

 
// /////////////////////////////  3. objects  ///////////////////////////// 


////////// best and good way to write object 
// type User = {
//     id : number,
//     name : string,
//     eligible : true,
//     habbits : [string,number][]
//     about : any[]


// }
// let user: User = {
//     id : 1,
//     name : 'Hadyer',
//     eligible : true,
//     habbits : [
//         ['good' , 3],
//         ['better' ,33]
//     ],
//     about : [1,2,'yes']


// }

// console.log(user)
// user['bool'] = true;
// console.log(user)


//////////////////////////////////////////

// const obj: {
//     name : string,
//     age : number,
//     eligible : boolean
// } = {

//     name : 'hayder',
//     age : 16,
//     eligible : true
// }

// const person  = {
//     name : 'hayder',
//     age : 16,
//     eligible : true
// }

// console.log(person.name)


//  /////////////////////////////  4. using arrray and tuple   /////////////////////////////  


//  /////////////////////////////  arrays  ///////////////////////

// let ids: number[] = [1,2,3,4,5]
// let arr: any[] = ['hayder',1,'3', true]
// let person:  [string,number,boolean] = ['hayder',15,true] // tuple 

// person.push('raza')
// person[1]= 12;
// person.unshift('console')

// console.log(person)

////////////////////////// tuple with array 

// let persons: [number,string][];
// persons = [
//     [1,'hayder'],
//     [2,'jutt'],
//     [3,'peter']
// ]


// const user : {
//     name : string,
//     age : number,
//     hobbies : string[],
//     require : [number , string],
//     bio : {
//         qualification : string,
//         using : number
//         termonologies : string[]
//     } 

// } = {

//     name : 'hayder',
//     age : 16,
//     hobbies : ['games','entertainment','cricket'],
//     require : [10000,'programmer'],
//     bio : {
//         qualification : 'master computer science',
//         using : 5,
//         termonologies : ['good','better','excellent']
//     }

// }

// user.require = [3,'hayder']
// console.log(user.require)
// user.require[0] = 5;
// console.log(user.require.push('hayder'))
// console.log(user.require)

// console.log(user.name)
// console.log(user.hobbies[2])
// console.log(user.bio.qualification)
// console.log(user.bio.termonologies[2])







//  /////////////////////////////  5 . enum  ///////////////////////////// 

///////////////////example ////////////////

// enum Directions {
//     up = 11,
//     down,
//     left,
//     right
// }
// console.log(Directions.left)
// console.log(Directions['left'])

// enum Role {ADMIN ,CONSUME, READ_ONlY = 'Hayder' , AUTHOR = 'Maxmillian'};
// const ADMIN = 'hayder';
// console.log(Role.CONSUME)

// // const ADMIN = 0;
// // const READ_ONly = 10;
// // const AUTHOR = 2;

// const person = {
//     name : 'Hayder Jutt',
//     age : 16,
//     hobbies : ['sports','Cooking'],
//     role : Role.READ_ONlY,
//     admin : Role.ADMIN
// }


// console.log(person.admin)


// if(person.role == Role.READ_ONlY){
//     console.log("IS ADMIN+ YES")
// }


//  /////////////////////////////  6 . union type   ///////////////////////////// 

// function message(content : number | string ):void{
//     console.log(content)
//     console.log(typeof content)
// }

// message(34)



// type content = number | string;
// type printResult = Function | object;
// type booleanable = 'yes' | 'no' | 'pending';

// function message(msg : content , result : printResult , defineType : booleanable):void{
//     console.log(msg, typeof msg)
//     if(typeof result == "object"){
//         console.log(result['name'] , result['age'])
//     }
//     else{
//         printResult(msg)
//     }

//     console.log(defineType)
// }

// function printResult(msg : string | number):void{
//     console.log('your message is print' , msg)
// }

// enum Role {name = 'Hayder' , age = 16}
// const user = {
//     name : Role.name,
//     age : Role.age
// }

// message(500,printResult,'pending' )

//  /////////////////////////////  7. Type Assertions  ///////////////////////////// 

// let cid:any = 1;
// // let customId = <number>cid;
// let customId = cid as boolean;
// console.log(customId)
  


//  /////////////////////////////  8. any and unknown  ///////////////////////////// 

// good example of any 


// function setMessage(msg : string):void{
//     console.log(msg)
// }
// let mymessage:any = 2323;
// setMessage(mymessage)

// good example of unknow 👍

// we check first type then goes to task 

// let num1 : unknown;
// if(typeof num1 == 'number'){
//     num1.toFixed()
// }



// let exampleAny : any;
// let exampleunknown : unknown;


// exampleAny = 123;
// exampleAny = 'hello';
// exampleAny = true;
// let anySetBool: boolean = exampleAny;
// console.log(anySetBool)


// exampleunknown = 123;
// exampleunknown = 'world'


// if(typeof exampleunknown == 'boolean'){
//     let unknownBol : boolean = exampleunknown;
// }
// if(typeof exampleunknown == 'string'){
//     exampleunknown.trim()
//     exampleunknown.toUpperCase()
// }


// // 2nd example of unknown 

// let mycode : unknown = ' yeah this is me     ';

// if(typeof mycode == 'string'){
//     console.log(mycode.trim())
// }




