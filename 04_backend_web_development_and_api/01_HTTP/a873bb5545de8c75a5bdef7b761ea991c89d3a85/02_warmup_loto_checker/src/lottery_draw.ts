import { Draw } from "./types";

function getRamdomNumbers(min: number, max: number) {

 return Math.floor(Math.random() * (max - min + 1)) + min;
 
}

export function lottery_draw(): Draw {
    const numbersOfArray = [];
    for (let i = 0; i < 3; i++) {
        numbersOfArray.push(getRamdomNumbers(0, 3));
        
    }
    return numbersOfArray;
}

console.log(lottery_draw());
