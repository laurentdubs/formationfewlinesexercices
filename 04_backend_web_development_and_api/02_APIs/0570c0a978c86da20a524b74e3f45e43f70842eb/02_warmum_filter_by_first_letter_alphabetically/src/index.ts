// code here
import { Customer } from "../data/customers";

function filterByFirstLetter(customers: Customer[], letter: string): Customer[] {
  // Code here
 const arrayFiltered = customers.filter((customers) => letter === customers.last_name[0]) 
  
 return arrayFiltered;
}

export function filterByFirstLetterOrdered(customers: Customer[], letter:string): Customer[] {
    const arrayFilteredInAlphabeticalOrder = filterByFirstLetter(customers, letter).sort((a, b) => {
    if (a.last_name > b.last_name === true) {
       return 1;
     }
    else if (b.last_name > b.last_name === false) {
        return -1;
    }
    else {
        return 0;
    }
    })


    console.log(arrayFilteredInAlphabeticalOrder);
    
    return arrayFilteredInAlphabeticalOrder;
}