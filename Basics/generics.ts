// generics in typescript 

function getArray<R>(items:R[]):R[]{
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4,5])
let strArr = getArray<string>(['brad','john','jill'])

// numArr.push('hayder') // !!error
