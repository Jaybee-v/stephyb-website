import React from 'react'

export default function CutPrices() {
  return (
     <div className='w-[90%] bg-white mx-auto px-5 pb-6 pt-2 rounded-xl mb-3 z-30 relative'>
        <h6 className='pt-1 pb-3 text-center'>Tarifs prestation coiffure à domicile</h6>
        <div className='w-full h-full border-2 border-[#fab1a0] p-3 rounded-2xl'>
            <div className="">
                    <div className="text-center text-lg">
                        Shampooing / coupe / brushing
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold text-lg">35 €</div>
                </div>
                <div className="">
                    <div className="text-center text-lg">
                        Shampooing / coloration / brushing
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold text-lg">48 €</div>
                </div>
                <div className="">
                    <div className="text-center text-lg">
                        Shampooing / coupe / coloration / brushing
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold text-lg">57 €</div>
                </div>
                <div className="">
                    <div className="text-center text-lg">
                        Shampooing / balayage ou mèches / brushing
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold text-lg">75 €</div>
                </div>
                <div className="">
                    <div className="text-center text-lg">
                        Shampooing / balayage ou mèches / brushing
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold">85 €</div>
                </div>
                <div className="">
                    <div className="text-center text-lg">
                        Patine ou dose supplémentaire
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold text-lg">15 €</div>
                </div>
                <div className="">
                    <div className="text-center text-lg">
                        Extensions pose à chaud cheveux naturels
                    </div>
                    <div className="text-center text-[#e17055] p-2 font-bold text-lg">
                        À partir de 2 € la mèche posée et fournie
                    </div>
                </div>
        </div>

    </div>
  )
}
