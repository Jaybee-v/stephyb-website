import Image from 'next/image';
import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

export default function Carrousel({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide= ()=>{
    const isFirstSlide = currentIndex === 0
    const newIndex =isFirstSlide ? slides.length - 1 : currentIndex -1
    setCurrentIndex(newIndex)
  }
  
  const nextSlide= ()=>{
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex +1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
  }
    return (
    <div className="max-w-[600px] max-h-[850px] w-full m-auto px-4 relative">
      <Image src={slides[currentIndex].url} alt={slides[currentIndex].alt} className='w-full h-[380px] rounded-2xl bg-center bg-cover duration-500'/>
      <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xlcursor-pointer' onClick={prevSlide}>
        <BsChevronCompactLeft size={40} color={'#fff'}/>
      </div>
      <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl cursor-pointer' onClick={nextSlide}>
        <BsChevronCompactRight size={40} color={'#fff'}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex)=>(
          <div className='text-2xl cursor-pointer' key={slideIndex} onClick={()=> goToSlide(slideIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}
