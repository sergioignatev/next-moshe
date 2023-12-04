import Link from "next/link"
import { server } from "../api/server"
import { Props } from "../page"
export default async function Users({children,params}:{children:React.ReactNode,params:{id:number}}){
    let base:Props[]=await server()
    let i=base[params.id-1]
    let mappedItems=base.map(m=><><h1 className="text-[red] text-[20px] w-[300px] p-[20px] border-[1px] border-[red] m-[10px]">
        <Link  href={`/base/${m.id}`}><div className="text-[40px]">{m.id}</div>
        <div className="">{m.name}</div>
        </Link>
        </h1></>)
return <div className="bg">
    
   <div className="flex flex-wrap">{mappedItems}</div>
    {children}</div>
}