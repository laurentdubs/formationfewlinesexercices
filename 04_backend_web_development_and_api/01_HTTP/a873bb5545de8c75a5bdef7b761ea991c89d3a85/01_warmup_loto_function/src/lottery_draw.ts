type Draw = number[]

function getRamdomNumbers(min: number, max: number)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
 
}

export function lottery_draw(): Draw {
    const numbersOfArray = [];
    for (let i = 0; i < 6; i++) {
        numbersOfArray.push(getRamdomNumbers(0, 100));
        
    }
    return numbersOfArray;
}