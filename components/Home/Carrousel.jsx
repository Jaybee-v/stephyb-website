import React from 'react'

export default function Carrousel({slides}) {
  console.log(slides[0]);
    return (
    <div className="max-w-[350px] h-[450px] w-full m-auto py-10 px-4 relative">
      <div style={{backgroundImage: `url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        
      </div>
    </div>
  )
}
