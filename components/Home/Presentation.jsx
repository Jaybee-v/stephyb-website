import Image from 'next/image'
import React from 'react'
import portrait from '@/assets/stephyB.jpg'
import { FaFacebook, FaInstagram } from "react-icons/fa"


export default function Presentation() {
  return (
    <div className='w-[90%] mx-auto bg-white px-1 py-2 rounded-xl z-50 relative'>
        <div className='flex flex-col justify-center'>
            <h1 className='mx-auto pb-1 pt-1'>StephyB Coiffure</h1>
              <div className='flex mx-auto mb-2'>
                    <FaFacebook size={35} />
                    <FaInstagram  size={35}/>
                </div>
            <Image src={portrait} alt='Portrait de la coiffeuse StephyB' className='rounded-se-3xl rounded-ss-3xl w-[85%] mx-auto'/>
              <article className="mt-4 indent-8 w-[80%] flex flex-col mx-auto justify-center items-center pb-4">
                    <span>
                        Stéphanie,{" "}
                        <b className="text-[#ff7675]">
                            coiffeuse et maquilleuse à domicile
                        </b>
                        ,{" "}
                        <b className="text-[#ff7675]">
                            spécialisée dans le domaine du mariage depuis plus
                            de 15 ans{" "}
                        </b>
                        et basée à Rousset, proche d&apos;
                        <b className="text-[#d63031]">Aix-en-Provence</b>.
                    </span>{" "}
                    <span>
                        Je me déplace <b className="text-[#d63031]">chez vous</b>, ou sur vos lieux
                        d&apos;événements pour <b className="text-[#ff7675]">tous services de coiffure et de
                        mise en beauté</b>.
                    </span>
                    <span>
                        Chignons, mise en beauté, coloration, mèches, balayage,
                        coupe et extensions! Tout est possible à domicile, sans
                        perdre de temps à se déplacer. C&apos;est un véritable salon
                        de coiffure et de mise en beauté qui se déplace à votre
                        domicile!
                    </span>
                </article>
        </div>
    </div>
  )
}
