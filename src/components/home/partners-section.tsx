"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

// Image imports
import Image1 from "@/assets/partners/IMG-20240818-WA0007.jpg"
import Image2 from "@/assets/partners/IMG-20240818-WA0008.jpg"
import Image3 from "@/assets/partners/IMG-20240818-WA0009.jpg"
// Image imports end

export default function PartnersSection() {


  return (
    <div className="py-20">
      <h1 className="text-center text-[42px] font-bold">We Deal With...</h1>
      <div className="w-[70vw] mx-auto">
      <Carousel opts={{loop: true}}>
        <CarouselContent>
          <CarouselItem><Image src={Image1} alt="Image1" height={400} width={400} /></CarouselItem>
          <CarouselItem><Image src={Image2} alt="Image2" /></CarouselItem>
          <CarouselItem><Image src={Image3} alt="Image3" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      </div>
    </div>
  )
}