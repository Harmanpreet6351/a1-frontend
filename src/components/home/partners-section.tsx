"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function PartnersSection() {


  return (
    <div className="py-20">
      <h1 className="text-center text-[42px] font-bold">We Deal With...</h1>
      <div className="w-[70vw] mx-auto">
      <Carousel opts={{loop: true}}>
        <CarouselContent>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      </div>
    </div>
  )
}