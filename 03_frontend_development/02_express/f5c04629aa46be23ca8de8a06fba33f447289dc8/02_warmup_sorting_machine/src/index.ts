// Code here
const numArray = [10000, 104, 99, 2000, 3000, 1500];

function sortingMachine(numArray: number[], type :boolean): number[] {
    if(type === true) {
        return numArray.sort((a,b) => a - b);
    }
    else{
        return numArray.sort((a,b) => b - a);
    }
}
sortingMachine(numArray, true);
console.log(numArray);


export{sortingMachine};