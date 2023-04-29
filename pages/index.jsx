import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Shared/Navbar'
import mainImage from '../assets/background-home.jpg'
import Presentation from '@/components/Home/Presentation'
import Footer from '@/components/Shared/Footer'
import BackgroundShapes from '@/components/Shared/BackgroundShapes'
import BackgroundShapeFoot from '@/components/Shared/BackgroundShapeFoot'
import ColorCarrousel from '@/components/Home/ColorCarrousel'
import SeparationBar from '@/components/Shared/SeparationBar'
import WeddingCarrousel from '@/components/Home/WeddingCarrousel'
import WeddingPrices from '@/components/Home/WeddingPrices'
import CutPrices from '@/components/Home/CutPrices'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
 <BackgroundShapes/>
  <Image src={mainImage} alt='/' className='mb-2 mx-auto z-50 relative'/>
  <Navbar/>
  <BackgroundShapeFoot/>
  <Presentation/>

  <SeparationBar/>
  <section id='galerie'>
  <ColorCarrousel/>
  <WeddingCarrousel/>
  </section>
  <SeparationBar/>
  <section id='tarifs'>
    <WeddingPrices/>
    <CutPrices/>
  </section>
  <SeparationBar/>
  <Footer/>
    </>
  )
}
