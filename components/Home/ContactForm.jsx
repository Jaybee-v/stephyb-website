import React from 'react'

export default function ContactForm() {
  return (
    <div className='w-[90%] bg-white mx-auto pb-6 pt-4 rounded-xl mb-3 px-5  z-30 relative'>
        <h6 className='text-center pb-3'>Contact</h6>
        <form className='flex flex-col justify-center items-center'>
            <input className='border border-[#fab1a0] rounded-lg px-2 py-1 mb-2' type='text' placeholder='Votre nom'/>
            <input className='border border-[#fab1a0] rounded-lg px-2 py-1 mb-2' type='text' placeholder='Votre prénom'/>
            <input className='border border-[#fab1a0] rounded-lg px-2 py-1 mb-2' type='text' placeholder='Votre adresse email'/>
            <textarea placeholder='Votre message ici'/>
            <button className='mx-auto border-2 border-[#fab1a0] px-5 py-2 rounded-2xl text-[#fab1a0] font-semibold' type='submit'>ENVOYER</button>
        </form>
    </div>
  )
}
