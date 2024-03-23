
import Image from 'next/image'
import React from 'react'
import hero from "../../../public/assets/heros/hero-2.png"

type Props = {}

const Hero = (props: Props) => {

  return (
    <section className='grid grid-cols-2 pt-12 px-14'>
      <div className='p-5'>
        <h3 className='text-9xl font-bold p-5'>"run a <br/><span className='text-primary'><i>supercar</i></span><br/> for a day"</h3>
        <p className='text-xl font-semibold pt-4'>Feel the adrenaline with <span className='font-sans'>porche 911</span> in dubai,</p>
        <p className='text-xl font-bold '>Unleash the power of luxury with our stunning fleet of <span className='text-primary'>supercars</span>.<br/>Your dream ride awaits!</p>
        {/* <p className='text-xl p-1'>Your dream ride awaits!</p> */}
        <div className='flex justify-around my-8'>
          <button className='bg-sky-600 text-white rounded-full p-5 font-bold'>RIDE NOW</button>
          <button className='bg-green-600 text-white rounded-full p-5 font-bold'>CONTACT US</button>
        </div>
      </div>
      <div className='relative' >
      <Image src={hero}  layout='fill' objectFit='contain' alt='hero-image'></Image>
      </div>
    </section>
  )
}

export default Hero