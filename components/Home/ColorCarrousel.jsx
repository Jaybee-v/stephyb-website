import React from 'react'
import Carrousel from './Carrousel'

const slides = [
    {url: '../../assets/color-rouge.jpg', alt: 'Coloration rouge'},
]

export default function ColorCarrousel() {
  return (
    <Carrousel slides={slides}/>
  )
}
