"use client"
import React from 'react'

import { useRouter } from 'next/navigation'

type Props = {}

const Header = (props: Props) => {
  const router = useRouter()
  // const loginPage = () => {
  
  // }
  return (
    <header className="flex justify-between items-center px-20 pt-5 pb-5">
        <button className="text-primary font-bold" onClick={() => router.push('/')}>supcars</button>
        <nav className="flex items-center gap-10">
          <button className="text-black font-bold" onClick={() => router.push('/')}>Home</button>
          <button className="text-black font-bold" onClick={() => router.push('/cars')}>cars</button>
          <button className="text-black font-bold" onClick={() => router.push('/contact')}>contact</button>
          <button className="text-black font-bold" onClick={() => router.push('/about')}>about</button>
        <button className="text-white font-bold bg-primary px-4 py-2 rounded-full" onClick={() => router.push('/login')}>login</button>
        </nav>
      </header>
  )
}

export default Header