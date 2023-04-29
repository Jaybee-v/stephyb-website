import React from 'react'
import pic2 from '@/assets/wedding-boucles.jpg'
import pic3 from '@/assets/wedding-champetre.jpg'
import Carrousel from './Carrousel'

const slides = [
        {url: pic2, alt: 'Coloration rouge'},
    {url: pic3, alt: 'Coloration rouge'},
]

export default function WeddingCarrousel() {
  return (
    <div className='w-[90%] p-3 mx-auto bg-white'>
    <h6>Prestations mariages</h6>
    <Carrousel slides={slides}/>
    </div>
  )
}
