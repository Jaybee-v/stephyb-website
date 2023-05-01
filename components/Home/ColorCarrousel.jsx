import React from 'react'
import Carrousel from './Carrousel'
import pic1 from '@/assets/color-rouge.jpg'
import pic2 from '@/assets/color-red.jpg'
import pic3 from '@/assets/color-blond.jpg'
import pic4 from '@/assets/color-blondclair.jpg'
import pic5 from '@/assets/color-blondeboucles.jpg'
import pic6 from '@/assets/color-brune.jpg'
// import pic7 from '@/assets/color-brunelisse.jpg'


const slides = [
    {url: pic1, alt: 'Coloration rouge'},
    {url: pic2, alt: 'Coloration rouge'},
    {url: pic3, alt: 'Coloration blonde'},
    {url: pic4, alt: 'Coloration blond clair'},
    {url: pic5, alt: 'Coloration blonde bouclées'},
    {url: pic6, alt: 'Coloration brune'},
    // {url: pic7, alt: 'Coloration brune'},

]

export default function ColorCarrousel() {
  return (
    <div className='w-[90%] px-1 py-2 rounded-xl mx-auto bg-white  z-30 relative'>
    <h6 className='text-center'>Prestations colorisation</h6>
    <Carrousel slides={slides}/>
    </div>
  )
}
