// Code here
type CustomerType = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
}





function getEmails(data:CustomerType[]): string[]{
 const result = data.map(element => element.email)
 return result;
}



export{getEmails};