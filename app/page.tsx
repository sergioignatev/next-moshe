import Image from 'next/image'
import Link from 'next/link'
import { server } from './api/server'
export interface Props{
  
    postId: number,
    id: number,
    name:string,
    email:string,
    body: string
  
}
export default async function Home() {
let data:Props[]=await server()
const Data=()=>{return data.map(m=><h2 key={m.id} className='border-[2px] border-[red] w-[200px] p-[10px]'>{m.name}</h2>)}
  return (
    <main className="text-center ">
<div className="flex flex-wrap gap-10">
  <Data/>
</div>
    </main>
  )
}
