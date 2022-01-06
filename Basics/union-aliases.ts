// union type &  literal types &  customtype alliases...

type Combinable = number | string;
type ConversionDescription = 'as-number' | 'as-text'
type some = number | string // for return type of function




function combine(
  input1: Combinable,
  input2: Combinable,
  resultConvention: ConversionDescription
):some {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConvention === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result


  // if(resultConvention == 'as-number'){
  //   return +result
  // }else{
  //   return result.toString();
  // }


}

console.log(combine(5, 3, "as-number"));
console.log(combine("5", "3", "as-number"));
console.log(combine("hayder", "aly", "as-text"));


