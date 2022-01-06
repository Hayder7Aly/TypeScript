// unknown and any type in typescript 
// any type means any type of data store in this variable it behaves like a js 

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'


// unknown is better than any 

if(typeof userInput == 'string'){
    userName = userInput
}


// userName = userInput; !! error !! of unknow

// let mname: any;
// let age: number;
// mname = '55'
// age = mname;



function generateError(message: string , code: number):never{
    
    throw{message: message , errorCode : code};
    // while(true){}
    // console.log('hello weorld')
}

console.log(generateError('An error is occured during typescript compilation',500))