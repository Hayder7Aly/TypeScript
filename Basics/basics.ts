console.log("Time to get with Type$cript") ;

// 1 . number , string and boolean 

function adder(n1: number,n2: number , showResult: boolean , phrase: string){
    let result1 = n1 + n2;
    if(showResult){
        console.log(phrase , result)
    }else{
        return result1;
    }
}

let number1: number = 5 ;
const number2 = 2.8;
const result2 = true;
let resultPhrase = 'Result is : ';

console.log(adder(number1,number2,result2,resultPhrase))


