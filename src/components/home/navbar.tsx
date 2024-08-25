import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import MenuButton from "./menu-button";

export default function Navbar() {

  return (
    <>
      <div className="bg-black py-1 px-5 flex items-center justify-between">
        <div className="py-2">
          <Image src={Logo} height={80} width={75} alt="A1 Installations" />
        </div>
        <div className="text-white hidden sm:flex gap-4">
          <Link href="#" className="hover:bg-white hover:text-black p-2 rounded-lg transition-all duration-300">Home</Link>
          <Link href="#" className="hover:bg-white hover:text-black p-2 rounded-lg transition-all duration-300">Services</Link>
          <Link href="#" className="hover:bg-white hover:text-black p-2 rounded-lg transition-all duration-300">Testimonials</Link>
          <Link href="#" className="hover:bg-white hover:text-black p-2 rounded-lg transition-all duration-300">Contact Us</Link>
        </div>
        <MenuButton />
      </div>
      <div id="mobile-menu" className="bg-black text-white flex flex-col items-center *:p-4 transition-all duration-100 max-h-0 overflow-hidden">
        <Link href="#">Home</Link>
        <Link href="#">Services</Link>
        <Link href="#">Testimonials</Link>
        <Link href="#">Contact Us</Link>
      </div>
    </>
  )
}