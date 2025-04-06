import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Nav = () => {
  return (
    <>
    <nav className='flex justify-between px-32 py-9 text-[14px] font-medium '>
      <div className='flex  gap-10 justify-center items-center'>
      <Link href={'/'}>
        <Image src={"/logo.png"} height={103} width={126} alt='logo'/>
      
      </Link>
      <Link href={'/sleep'}>Sleep</Link>    
      <Link href={'/stress_anxiety'}>Stress & Anxiety</Link>
      <Link href={'/mind'}>Mindfulness</Link>
      </div>
      <div className='flex  gap-10 justify-center items-center'>
         <Link href={'/login'}>Log in</Link>
         <Link href={'/try_for_free'}>
         <Button className={'bg-gradient-to-r from-[#4972E1] to-[#DB6FEE] w-[174] py-6 rounded-4xl'}>Try Safe Space for Free</Button>
         
         </Link>
      </div>
    </nav>
    </> 
  )
}

export default Nav