import { server } from "@/app/api/server";
import { Props } from "@/app/page";
import Image from "next/image";
export default async function Base ({params}:{params:{id:number}}){
let base:Props[]=await server()
let i= base[params.id-1]
return <div >
    <a href="/">
    <Image
    src='/next.svg'
    alt='alt'
    width={300}
    height={100}
    className="text-center"
    />
    </a>
<div className="text-center text-[red] text-[30px] ">{i.id}</div>
<div className="text-center">{i.name}</div>

<p>{i.body}</p>
</div>
}