import { lottery_draw } from "./lottery_draw"
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // Code the function here
  const numbersOfTicket = lottery_draw();

  let result = 0;

  for (let i = 0; i < numbersOfTicket.length; i++) {
    if (ticket[i] === numbersOfTicket[i]) {
    result ++;
      
    }
  }
  if (result === 3) {
    console.log("You won the lottery!");
    
  }else {
    console.log("You lost...");
    
  }
}

  checkIfIWon([1, 2, 3]);