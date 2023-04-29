import Link from 'next/link'
import React from 'react'
import {TbCurrencyEuro, TbCut, TbHome2, TbHomeHand, TbCamera, TbMail} from 'react-icons/tb'
export default function Navbar() {
  return (
    <>
    <div className='w-[90%] h-[2px] bg-white mx-auto mt-2 mb-2 rounded-3xl'></div>
    <div className='flex justify-evenly border-x-2 border-white mx-2'>
      <Link href="/" className='flex flex-col justify-center items-center px-3 rounded-2xl'>
        <div className='rounded-3xl py-2 px-3 bg-[#ffffffd2] shadow-lg shadow-[#e17055]' >

          <TbHome2 size={35} color={'#e17055'}/>
        </div>
          <span className='bg-[#ffffff00] text-white font-semibold tracking-wide mt-2'>Accueil</span>
      </Link>
      <Link href="/galeries" className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-3 bg-[#ffffffd2] shadow-lg shadow-[#e17055]'>

          <TbCamera size={35} color={'#e17055'}/>
        </div>
          <span className='bg-[#ffffff00] text-white font-semibold tracking-wide mt-2'>Galeries</span>
      </Link>
      <Link href='/tarifs' className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-3 bg-[#ffffffd2] shadow-lg shadow-[#e17055]'>

          <TbCurrencyEuro size={35} color={'#e17055'}/>
        </div>
          <span className='bg-[#ffffff00] text-white font-semibold tracking-wide mt-2'>Tarifs</span>
      </Link>
      <Link href='/contact' className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-3 bg-[#ffffffd2] shadow-lg shadow-[#e17055]'>

          <TbMail size={35} color={'#e17055'}/>
        </div>
          <span className='bg-[#ffffff00] text-white font-semibold tracking-wide mt-2'>Contact</span>
      </Link>
    </div>
    <div className='w-[90%] h-[2px] bg-white mx-auto mt-1 mb-4'></div>
    </>
  )
}
