"use client"

import { AnimatePresence } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { ElectricalComponent, FurnitureComponent, KitchenComponent, PaintingComponent, PlumbingComponent, WashingMachingComponent } from "./our-services-components"
import Image from "next/image"


import PaintingIcon from "@/assets/our-services/painting.svg"
import WashingMachine from "@/assets/our-services/washing-machine.svg"
import Kitchen from "@/assets/our-services/kitchen.svg"
import Plumbing from "@/assets/our-services/plumbing.svg"
import Electrical from "@/assets/our-services/electrical.svg"
import Furniture from "@/assets/our-services/furniture.svg"


export default function OurServicesSection() {

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true)

  useEffect(() => {
    setIsSmallScreen(window.innerWidth < 768)
  }, [])

  const dimension = useMemo(() => isSmallScreen ? 40 : 60, [isSmallScreen])

  const [itemName, setItemName] = useState<string>("washing-machine")

  const buttonClassNames = useMemo(() => "shadow-md py-8 h-[90px] w-[90px] lg:h-[120px] lg:w-[120px] flex items-center justify-center", [])

  return (
    <div className="py-16 lg:px-32 md:px-16 px-4">
      <h1 className="text-center text-[32px] lg:text-[42px] font-bold">Our Services</h1>
      <div className="grid grid-cols-3 gap-5 md:grid-cols-6 pt-16 pb-8 place-items-center place-content-center">
        <button className={buttonClassNames} onClick={() => setItemName("washing-machine")}><Image src={WashingMachine} width={dimension} height={dimension} alt="Painting" /></button>
        <button className={buttonClassNames} onClick={() => setItemName("kitchen")}><Image src={Kitchen} width={isSmallScreen ? 30 : 40} height={isSmallScreen ? 30 : 40} alt="Painting" /></button>
        <button className={buttonClassNames} onClick={() => setItemName("plumbing")}><Image src={Plumbing} width={dimension} height={dimension} alt="Painting" /></button>
        <button className={buttonClassNames} onClick={() => setItemName("electrical")}><Image src={Electrical} width={dimension} height={dimension} alt="Painting" /></button>
        <button className={buttonClassNames} onClick={() => setItemName("furniture")}><Image src={Furniture} width={dimension} height={dimension} alt="Painting" /></button>
        <button className={buttonClassNames} onClick={() => setItemName("painting")}><Image src={PaintingIcon} width={dimension} height={dimension} alt="Painting" /></button>
      </div>
        <div className="flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row justify-evenly items-center lg:items-start">
          <AnimatePresence mode="wait" initial={false}>
          {
            itemName === "washing-machine" ? <WashingMachingComponent /> 
            :
            itemName === "kitchen" ? <KitchenComponent />
            :
            itemName === "plumbing" ? <PlumbingComponent />
            :
            itemName === "electrical" ? <ElectricalComponent />
            :
            itemName === "furniture" ? <FurnitureComponent />
            :
            itemName === "painting" ? <PaintingComponent />
            : null
          }
          </AnimatePresence>
        </div>
    </div>
  )
}