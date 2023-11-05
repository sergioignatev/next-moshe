
interface Users{
    id:number,
    name:string,
    email:string,
    address:{
        city:string
    }
}
function MappedUser({name,address,email}:Users){
    return <div  className="p-6 border-blue-800 border-[2px] w-[300px] bg-blue-300">
    {name}<br></br> {address.city} <div className="text-[19px]">{email}</div></div>
}

const  User= async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-storegit add -A'})
    const users:Users[] = await res.json()
    return <div className="text-center ">
<h1 className="text-center">USERS</h1>
<p>{new Date().toLocaleTimeString()}</p>
<h2 className="flex flex-wrap gap-[10px]">{users.map(user=><MappedUser key={user.id} {...user}/>)}</h2>
</div>
}
export default User