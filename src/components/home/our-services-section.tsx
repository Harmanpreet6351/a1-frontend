"use client"

import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { KitchenComponent, WashingMachingComponent } from "./our-services-components"

export default function OurServicesSection() {
  
  const [itemName, setItemName] = useState<string>("washing-machine")

  return (
    <div className="py-16 lg:px-32 md:px-16 px-4">
      <h1 className="text-center text-[42px] font-bold">Our Services</h1>
      <div className="grid grid-cols-3 md:grid-cols-6 py-8">
        <button className="shadow-lg py-8" onClick={() => setItemName("washing-machine")}>Press me</button>
        <button className="shadow-lg py-8" onClick={() => setItemName("kitchen")}>Press me</button>
        <button className="shadow-lg py-8">Press me</button>
        <button className="shadow-lg py-8">Press me</button>
        <button className="shadow-lg py-8">Press me</button>
        <button className="shadow-lg py-8">Press me</button>
      </div>
        <div className="flex justify-between">
          <AnimatePresence mode="wait" initial={false}>
          {
            itemName === "washing-machine" ? 
            <WashingMachingComponent /> :
            itemName === "kitchen" && <KitchenComponent />
          }
          </AnimatePresence>
        </div>
    </div>
  )
}