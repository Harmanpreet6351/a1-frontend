import Image from "next/image"
import FacebookLogo from "@/assets/facebook.svg"
import XTwitter from "@/assets/xtwitter.svg"
import TikTok from "@/assets/tiktok.svg"
import Instagram from "@/assets/instagram.svg"

export default function UpperNavbar () {
  return (
    <div className="bg-gradient-to-b from-[#10204B] to-[#103088] text-white font-bold py-2.5 flex justify-center lg:justify-between items-center px-7">
      <div className="hidden lg:block"></div>
      <div>Leave a MESSAGE/Hop on a CALL with us TODAY , to insure exciting DEALS!</div>
      <div className="lg:flex gap-4 items-center hidden">
        <Image src={Instagram} width={30} height={30} alt="instagram" />
        <Image src={FacebookLogo} width={30} height={30} alt="facebook" />
        <Image src={XTwitter} width={30} height={30} alt="x" />
        <Image src={TikTok} width={30} height={30} alt="tiktok" className="relative top-1"/>
      </div>
    </div>
  )
}