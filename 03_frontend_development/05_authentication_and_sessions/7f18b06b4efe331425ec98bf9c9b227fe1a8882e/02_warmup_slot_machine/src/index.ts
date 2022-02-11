// Code here
function slotMachine(aTuple: [string, string, string] | [number, number, number] | [boolean, boolean, boolean]):boolean{
    if (aTuple[0] === aTuple[1] && aTuple[1] === aTuple[2]) {
        return true;
    }else {
        return false;
    }
    
}

slotMachine([1,1,1])
console.log(slotMachine([1,1,1]));
console.log(slotMachine([true, false, true]));



export {slotMachine};