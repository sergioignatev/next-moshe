
interface Users{
    id:number,
    name:string,
    email:string,
    address:{
        city:string
    }
}


const  User= async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const users:Users[] = await res.json()
    return <div className="text-center ">
<h1 className="text-center">USERS</h1>
<div className="flex flex-wrap gap-[10px]">
    {users.map(u=><div className="bg-blue p-6" key={u.id}>{u.name}</div>)}
</div>
</div>
}
export default User