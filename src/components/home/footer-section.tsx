import Image from "next/image";
import Logo from "@/assets/logo.svg"
import Location from "@/assets/location.svg"
import Mail from "@/assets/mail.svg"
import Phone from "@/assets/phone.svg"


export default function FooterSection() {

  return (
    <div className="bg-black text-white flex flex-col md:flex-row gap-16 px-8 md:p-0 justify-evenly py-16">
      <div>
        <Image src={Logo} alt="A1 Installations" />
        <p>You home, our experties perfect every time</p>
      </div>
      <div>
        <h4 className="underline">Helpful links</h4>
        <ul className="mt-4">
          <li>Home</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p><Image src={Location} alt="location" height={20} width={20} className="inline mr-2"/>Chilliwack, BC V2P 3N1</p>
        <p><Image src={Mail} alt="mail" height={20} width={20} className="inline mr-2"/>installation.a1.services@gmail.com</p>
        <div className="flex items-start gap-2">
          <Image src={Phone} alt="phone" height={20} width={20} className="mt-1"/>
          <p>+(1) 778-838-4848<br/>+(1) 604-808-3231</p>
        </div>
      </div>
    </div>
  )
}