function add(n1: number , n2: number){
    return n1 + n2
}

function printResult(num : number): void{
    console.log('Result ' + num)
    return;
}


const result = printResult(add(5,12))
// console.log(result)

// let someValue: undefined;

let combineValues: Function;
// combineValues = add;
combineValues = printResult;
// combineValues = 5; !! Error !!
console.log(combineValues(4,9))


// 2 . other Example 



function somethingTake(num : number , num2: number){

    return num * num2;
}

let combination : (num : number , num2:number) => number;
combination = somethingTake;

console.log(combination(5,4))



// 3 . example with call back function 


function addAndHandle(n1: number , n2: number , cb: (num: number) => number){
    const resutlt = n1 + n2;
    cb(resutlt)
}


addAndHandle(5,3,(result)=>{
    console.log(`Inside Callback Function and Result = ${result}`)
    return result;
    
})