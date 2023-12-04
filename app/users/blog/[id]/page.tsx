import { server } from "@/app/api/server"
import { Props } from "@/app/page"
import { InView } from "@/lib/InView"
export default async function Users({params}:{params:{id:number}}){
    let base:Props[]=await server()
    let use=base[params.id-1]
    return <InView> <div className="bg-slate-300 text-center">
<h1 className="text-center text-[red] text-[20px]">{use.id} </h1>
<p>{use.name}</p>
<p>{use.body}</p>
    </div>
    </InView>
}