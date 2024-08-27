"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import Pic1 from "@/assets/testimonial-caraousel/pic1.jpeg"
import Pic2 from "@/assets/testimonial-caraousel/pic2.jpg"
import Pic3 from "@/assets/testimonial-caraousel/pic3.jpg"
import Pic4 from "@/assets/testimonial-caraousel/pic4.jpg"
import Pic5 from "@/assets/testimonial-caraousel/pic5.jpg"
import Pic6 from "@/assets/testimonial-caraousel/pic6.webp"

export default function TestimonialCaraouselSection() {
  return (
    <div>
      <Carousel className="w-[70vw] mx-auto" opts={{loop: true, align: "end"}} plugins={[ (Autoplay({delay: 1500}) as any), ]}>
        <CarouselContent>
          <CarouselItem className="items-center">
            <Image src={Pic1} className="aspect-video" alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Pic2} className="aspect-video" alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Pic3} className="aspect-video" alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Pic4} className="aspect-video" alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Pic5} className="aspect-video" alt="" />
          </CarouselItem>
          <CarouselItem>
            <Image src={Pic6} className="aspect-video" alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-black" />
        <CarouselNext className="bg-black" />
      </Carousel>
    </div>
  )
}