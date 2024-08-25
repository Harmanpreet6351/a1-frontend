"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useMemo } from "react";
import Autoplay from "embla-carousel-autoplay"

// Image imports
import Thermador from "@/assets/partners/thermador.svg"
import MagicChef from "@/assets/partners/magic-chief.svg"
import KitchenAid from "@/assets/partners/kitchen-aid.svg"
import Bosch from "@/assets/partners/bosch.svg"
import Wolf from "@/assets/partners/wolf.png"
import Whirlpool from "@/assets/partners/whirlpool.svg"
import Amana from "@/assets/partners/amana-1.svg"
import Subzero from "@/assets/partners/subzero.png"
import Asko from "@/assets/partners/Asko.svg"
import Chambers from "@/assets/partners/chambers.jpg"
import Dacor from "@/assets/partners/dacor.svg"
import Electrolux from "@/assets/partners/electrolux-1.svg"
import FisherPaykel from "@/assets/partners/fisher-paykel-appliances-1.svg"
import GaggenauHausgeraete from "@/assets/partners/gaggenau-hausgeraete-logo.svg"
import HotPoint from "@/assets/partners/hotpoint.png"
import JennAir from "@/assets/partners/JennAir-Brand-Logo-2018.png"
import Kenmore from "@/assets/partners/kenmore.svg"
import MonoGram from "@/assets/partners/monogram logo.png"
import MonoGramSVG from "@/assets/partners/monogram-logo-sandstone.svg"
import Tappan from "@/assets/partners/tappan.svg"
import LG from "@/assets/partners/lg-electronics.svg"
import Samsung from "@/assets/partners/samsung.svg"
import Viking from "@/assets/partners/viking_appliances.png"
import Maytag from "@/assets/partners/maytag-vector-logo.svg"
import Frigidaire from "@/assets/partners/frigidaire.svg"
import GE from "@/assets/partners/general-electric.svg"
// Image imports end

export default function PartnersSection() {

  const caraouselClasses = useMemo<string>(() => "md:basis-1/4 basis-1/2 pl-20", [])

  return (
    <div className="py-32">
      <h1 className="text-center text-[42px] font-bold pb-20">We Deal With...</h1>
      <div className="w-[70vw] mx-auto">
      <Carousel opts={{loop: true, align: "center"}} plugins={[ (Autoplay({delay: 1500}) as any), ]}>
        <CarouselContent className="items-center -ml-12">
          <CarouselItem className={caraouselClasses}><Image src={Wolf} alt="wolf" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Subzero} alt="subzero" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Thermador} alt="thermador" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={MagicChef} alt="magic chef" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={KitchenAid} alt="kitchen aid" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Bosch} alt="bosch" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Whirlpool} alt="whirlpool" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Amana} alt="amana" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Asko} alt="asko" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Chambers} alt="chambers" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Dacor} alt="dacor" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Electrolux} alt="electrolux" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={FisherPaykel} alt="fisher paykel" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={GaggenauHausgeraete} alt="Gaggenau Hausgeraete" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={HotPoint} alt="hotpoint" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={JennAir} alt="jennair" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Kenmore} alt="hotpoint" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={MonoGram} alt="monogram" height={200} width={200} /></CarouselItem>
          {/* <CarouselItem className={caraouselClasses + " pl-6 sm:pl-0"}><Image src={MonoGramSVG} alt="monogram" height={150} width={150} /></CarouselItem> */}
          <CarouselItem className={caraouselClasses}><Image src={Tappan} alt="tappan" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={LG} alt="lg" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Samsung} alt="samsung" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Viking} alt="viking" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Maytag} alt="maytag" height={200} width={200} /></CarouselItem>
          <CarouselItem className={caraouselClasses}><Image src={Frigidaire} alt="frigidaire" height={200} width={200} /></CarouselItem>
          <CarouselItem className={"md:basis-1/4 basis-1/2 pl-20"}><Image src={GE} alt="ge" height={100} width={100} /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  )
}