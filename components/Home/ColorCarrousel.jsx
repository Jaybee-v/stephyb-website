import React from 'react'
import Carrousel from './Carrousel'

import pic1 from '@/assets/color-rouge.jpg'


const slides = [
    {url: pic1, alt: 'Coloration rouge'},

]

export default function ColorCarrousel() {
  return (
    <div className='w-[90%] p-3 mx-auto bg-white mb-3'>
    <h6>Prestations colorisation</h6>
    <Carrousel slides={slides}/>
    </div>
  )
}
