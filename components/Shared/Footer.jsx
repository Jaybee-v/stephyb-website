import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import logo from "@/assets/logo.jpg"

const Logo = () => (
    <Image
        src={logo}
        width={110}
        height={110}
        alt="Logo StephyB - Coiffure"
    />
)

export default function Footer() {
  return (



     <footer className="flex flex-col sm:flex-row justify-center items-center bg-white pt-4">
            <div className="flex items-center">
                <Logo />
                <div className="ms-8 flex flex-col">
                    <div>bscoiffure@hotmail.fr</div>
                    <div>06.18.56.08.78</div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h6 className="py-4 text-[#ff7675]">Navigation</h6>
                <Link href="/" className="py-1">
                    Accueil
                </Link>
                <Link href="/galerie" className="py-1">
                    Galerie
                </Link>
                <Link href="/tarifs" className="py-1">
                    Tarifs
                </Link>
                <Link href="/contact" className="py-1">
                    Contact
                </Link>
            </div>
            <div className="">
                <h6 className="text-[#ff7675] py-4">Mes réseaux</h6>
                <div>
                    <FaFacebook />
                    <FaInstagram />
                </div>
            </div>
        </footer>
 
  )
}
