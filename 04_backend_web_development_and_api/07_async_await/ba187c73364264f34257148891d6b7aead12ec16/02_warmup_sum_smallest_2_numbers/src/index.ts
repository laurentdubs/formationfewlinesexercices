export function sumTwoSmallestNumbers(arrayOfNumbers: number[]): number {
  return arrayOfNumbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);
}


sumTwoSmallestNumbers([19, 5, 42, 2, 77]);
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
