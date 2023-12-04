import { server } from "@/app/api/server";
import { Props } from "@/app/page";
import Image from "next/image";
export default async function Base ({params}:{params:{id:number}}){
let base:Props[]=await server()
let i= base[params.id-1]
return <div >
    
<div className="text-center text-[red]">{i.id}</div>
<div className="text-center">{i.name}</div>

<p>{i.body}</p>
</div>
}