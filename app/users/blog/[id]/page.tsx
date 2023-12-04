import { server } from "@/app/api/server"
import { Props } from "@/app/page"
export default async function Users({params}:{params:{id:number}}){
    let base:Props[]=await server()
    let use=base[params.id-1]
    return <div className="">
<h1 className="text-center text-[red] text-[20px]">{use.id} {use.name}</h1>

    </div>
}