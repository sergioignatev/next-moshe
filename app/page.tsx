import Image from 'next/image'
import Link from 'next/link'
export default function Home() {

  return (
    <main className="">
<span className="countdown font-mono text-2xl">
  <span style={{"--value":10}}></span>:
  <span style={{"--value":24}}></span>:
  <span style={{"--value":0}}></span>
</span>
    </main>
  )
}
