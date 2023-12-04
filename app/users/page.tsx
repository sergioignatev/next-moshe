import Link from "next/link"
import { InView } from "@/lib/InView"
import { server } from "../api/server"
import { Props } from "../page"
export default async function Users({params}:{params:{id:number}}){
    let base:Props[]=await server()
    let i=base[params.id-1]
    let mappedItems=base.map(m=><div className="text-black text-[20px] w-[300px] p-[20px]  m-[10px]">
      <InView duration={0.2} > <Link  href={`/users/blog/${m.id}`}><div className="text-[40px]">{m.id}</div>
        <div className="">{m.name}</div>
        </Link>
        </InView>
        </div>)
return <div className="bg">
    
   <div className="flex flex-wrap">{mappedItems}</div>
    </div>
}