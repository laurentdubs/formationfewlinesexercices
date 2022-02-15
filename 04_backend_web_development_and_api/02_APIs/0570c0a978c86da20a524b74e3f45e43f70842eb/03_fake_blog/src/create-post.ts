import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string): void {

    request(`http://${process.env.HOST}/posts`, 
    {
    method:"POST", 
    body:JSON.stringify({ title, author }), 
    headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
        if(error) {
            console.log(error);
         }else {
             const data = JSON.parse(body);
             console.log(data);
             
             }
        }
    ); 

}
console.log(process.env.HOST);


export { createPost };
