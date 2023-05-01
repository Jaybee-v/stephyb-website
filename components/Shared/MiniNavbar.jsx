import Link from 'next/link'
import React from 'react'
import {TbCurrencyEuro, TbHome2, TbCamera, TbMail} from 'react-icons/tb'

export default function MiniNavbar() {
  return (
    <div className='fixed top-[50%] right-0 translate-y-[-50%] z-50 flex flex-col bg-[#fab0a0e3] rounded-3xl'>
      <Link href="/" className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-1 bg-[#ffffffd2] shadow-lg shadow-[#e17055]' >

          <TbHome2 size={25} color={'#e17055'}/>
        </div>
      </Link>
      <Link href="#galerie" className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-1 bg-[#ffffffd2] shadow-lg shadow-[#e17055]'>

          <TbCamera size={25} color={'#e17055'}/>
        </div>
      </Link>
      <Link href='#tarifs' className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-1 bg-[#ffffffd2] shadow-lg shadow-[#e17055]'>

          <TbCurrencyEuro size={25} color={'#e17055'}/>
        </div>
      </Link>
      <Link href='#contact' className='flex flex-col justify-center items-center p-2 rounded-2xl'>
        <div className='rounded-3xl py-2 px-1 bg-[#ffffffd2] shadow-lg shadow-[#e17055]'>

          <TbMail size={25} color={'#e17055'}/>
        </div>
      </Link>
    </div>
  )
}
