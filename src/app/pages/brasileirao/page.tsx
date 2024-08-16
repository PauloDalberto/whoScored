import Image from 'next/image';
import './brasileirao.css'

export default function Brasileirao(){

  return (
    <section className="container">
      <div className='content'>
        <Image src="/provisorio.png" alt="Logo do vant" width={550} height={300} priority={true} />

        <input type="text" placeholder='3 tentivas possiveis' className='search'/>

        
      </div>
    </section>
  )
}