import Link from "next/link"
import { InView } from "@/lib/InView"
import { server } from "../api/server"
import { Props } from "../page"
export default async function Users({params}:{params:{id:number}}){
    let base:Props[]=await server()
    let i=base[params.id-1]
    let mappedItems=base.map(m=>
        <div className="group relative border-[1px] h-[300px] w-[250px]   owerflow-scroll " key={m.id}>
            <div className="group-hover:opacity-100 rounded-lg text-white bg-slate-600 absolute w-[100%] h-[100%] opacity-0 p-2">{m.body}</div>
    <div className="group-hover:opacity-10 w-[250px] opacity-100  m-[10px] relative group" ><InView duration={0.2} >
    
        <div  className="text-[20px]  p-2  ">
       <Link  href={`/users/blog/${m.id}`}><div className="text-[40px] text-center">{m.id}</div>
        <div className="text-[red]">{m.name}</div>
        </Link>
        
        </div></InView></div></div>)
return <div className="bg">
    
   <div className="flex flex-wrap gap-9">{mappedItems}</div>
    </div>
}