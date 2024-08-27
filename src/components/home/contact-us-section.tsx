import locationVector from "@/assets/location.svg"
import mailVector from "@/assets/mail.svg"
import phoneVector from "@/assets/phone.svg"
import Image from "next/image"

export default function ContactUsSection() {
  
  return (
    <div id="contact" className="flex flex-col lg:flex-row gap-16 lg:gap-0 justify-evenly py-16 text-white bg-gradient-to-b from-[#10204B] to-[#103088]">
      <div className="flex flex-col items-center gap-2">
        <Image src={locationVector} alt="Location" />
        <p className="text-[18px] lg:text-[24px]">Chilliwack, BC V2P 3N1</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src={mailVector} alt="Location" />
        <p className="text-[18px] lg:text-[24px]">installation.a1.services@gmail.com</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src={phoneVector} alt="Location" />
        <p className="text-center text-[18px] lg:text-[24px]">+(1) 778-838-4848<br/>+(1) 604-808-3231</p>
      </div>
    </div>
  )

}