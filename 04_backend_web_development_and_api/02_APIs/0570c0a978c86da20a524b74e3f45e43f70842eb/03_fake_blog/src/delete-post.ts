import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(id: number): void {

    request(`http://${process.env.HOST}/posts/${id}`,
    {
        method: "DELETE",
        //headers: { "Content-Type": "application/json" },
     },
    (error, body) => {
        if (error) {
            console.log(error);
         } else {
             const data = JSON.parse(body);
             console.log(data);
            }
          },
    ); 
}

export { deletePost };
