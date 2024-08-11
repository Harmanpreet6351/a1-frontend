import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import MenuButton from "./menu-button";

export default function Navbar() {

  return (
    <>
      <div className="bg-black py-1 px-8 flex items-center justify-between">
        <div>
          <Image src={Logo} height={93} width={87} alt="A1 Installations" />
        </div>
        <div className="text-white hidden sm:flex gap-8">
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">Testimonials</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <MenuButton />
      </div>
      <div id="mobile-menu" className="bg-black text-white flex flex-col items-center *:p-4 transition-all duration-[1s] max-h-0">
        <Link href="#">Home</Link>
        <Link href="#">Services</Link>
        <Link href="#">Testimonials</Link>
        <Link href="#">Contact Us</Link>
      </div>
    </>
  )
}