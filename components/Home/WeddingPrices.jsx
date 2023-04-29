import React from 'react'

export default function WeddingPrices() {
  return (
    <div className='w-[90%] bg-white mx-auto p-3 mb-3'>
        <h6 className='pt-1 pb-3'>Tarifs prestation mariage</h6>
        <div className='w-full h-full border-2 border-[#fab1a0] p-3 rounded-2xl'>
            <div className="">
                    <div className="text-center py-2 text-lg">
                        Forfait Mariée coiffure seulement Essai et jour J
                    </div>
                    <div className="text-center text-[#e17055] text-lg p-2 font-bold">130 €</div>
                </div>
                <div className="">
                    <div className="text-center py-2 text-lg">
                        Forfait Mariée coiffure et maquillage Essai et jour J
                    </div>
                    <div className="text-center text-[#e17055] text-lg p-2 font-bold">180 €</div>
                </div>
                <div className="">
                    <div className="text-center py-2 text-lg">
                        Coiffure invitée sans essai
                    </div>
                    <div className="text-center text-[#e17055] text-lg p-2  font-bold">40 €</div>
                </div>
                <div className="">
                    <div className="text-center py-2 text-lg">
                        Coiffure et maquillage invitée sans essai
                    </div>
                    <div className="text-center text-[#e17055] text-lg p-2  font-bold">65 €</div>
                </div>
                <div className="">
                    <div className="text-center py-2 text-lg">
                        Coiffure enfant moins de 12 ans
                    </div>
                    <div className="text-center text-[#e17055] text-lg p-2  font-bold">25 €</div>
                </div>
        </div>

    </div>
  )
}
