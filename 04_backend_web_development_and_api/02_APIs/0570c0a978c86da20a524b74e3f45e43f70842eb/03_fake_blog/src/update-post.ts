import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id: number, newTitle: string): void {

    request(`http://${process.env.HOST}/posts/${id}`,
    {
        method:"PATCH", 
        body:JSON.stringify({title: newTitle}), 
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

function updatePostAuthor(id: number, newAuthor: string): void {

    request(`http://${process.env.HOST}/posts/${id}`,
    {
        method:"PATCH", 
        body:JSON.stringify({author: newAuthor}), 
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


function updatePost(id: number, newTitle: string, newAuthor: string): void {

    request(`http://${process.env.HOST}/posts/${id}`,
    {method:"PUT", 
    body:JSON.stringify({title: newTitle, author: newAuthor}), 
    headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
    if(error) {
        console.error(error);
     }else {
         const data = JSON.parse(body);
         console.log(data);
         
            }
        }
    );
         
}

export { updatePost, updatePostAuthor, updatePostTitle };
