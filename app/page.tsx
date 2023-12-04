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


  return (
    <main className="text-center ">
<div className="flex flex-wrap gap-10">
 <h1>THE MAIN PAGE </h1>
</div>
    </main>
  )
}
