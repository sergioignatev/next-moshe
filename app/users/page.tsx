
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
<h2 className="flex flex-wrap gap-[10px]">{users.map(user=><div key={user.id}>{user.name}</div>)}</h2>
</div>
}
export default User