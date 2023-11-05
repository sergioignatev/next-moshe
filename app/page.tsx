import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/users'>Users</Link>
      <div className="btn btn-primary">btn-primary</div>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star"  />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked/>
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<div className="mockup-phone border-primary">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi.</div>
  </div>
</div>
    </main>
  )
}
