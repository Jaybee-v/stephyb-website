import React from 'react'
import pic1 from '@/assets/wedding-boucleslongues.jpg'
import pic2 from '@/assets/wedding-boucles.jpg'
import pic3 from '@/assets/wedding-champetre.jpg'
import pic4 from '@/assets/wedding-fleurs.jpg'
import pic5 from '@/assets/wedding-strass.jpg'

import Carrousel from './Carrousel'

const slides = [
  {url: pic4, alt: 'Coiffure de mariage décorée de fleurs'},
  {url: pic1, alt:'Coiffure de mariage boucles longues'},
        {url: pic2, alt: 'Coiffure de mariage bouclée'},
    {url: pic3, alt: 'Coiffure de mariage champêtre'},
    {url: pic5, alt: 'Coiffure de mariage décorée de strass'},
]

export default function WeddingCarrousel() {
  return (
    <div className='w-[90%] px-1 py-2 rounded-xl mx-auto bg-white mb-3  z-30 relative'>
    <h6 className='text-center'>Prestations mariages</h6>
    <Carrousel slides={slides}/>
    </div>
  )
}
