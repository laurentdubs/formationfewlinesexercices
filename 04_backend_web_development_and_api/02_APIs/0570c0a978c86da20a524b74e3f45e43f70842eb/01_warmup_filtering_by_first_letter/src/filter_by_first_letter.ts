import { Customer } from "../data/customers";

export function filterByFirstLetter(customers: Customer[], letter: string): Customer[] {
  // Code here
 const arrayFiltered = customers.filter((customers) => letter === customers.last_name[0]) 
  
 return arrayFiltered;
}

