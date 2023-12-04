export async function server(){
    const res= await fetch ("https://jsonplaceholder.typicode.com/comments")
return res.json()

}