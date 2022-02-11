// Code here
const anArrayOfNumbers: number[] = [1, 92, 824];

function findDigit(anArrayOfNumbers:number[], digit:number): number[] {
   //const result: number[] = [];
   return anArrayOfNumbers.filter((number) => 
   number.toString().includes(digit.toString()));
}

findDigit(anArrayOfNumbers, 2);
console.log(findDigit(anArrayOfNumbers, 2));

export {findDigit};