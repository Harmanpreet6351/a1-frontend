import { HTMLMotionProps, motion } from "framer-motion"
import Image from "next/image"
import Viking from "@/assets/hero-backgroun.png"

const commonLeftAnimations: HTMLMotionProps<"div"> = {
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5
  }
}

const commonRightAnimations: HTMLMotionProps<"div"> = {
  animate: {
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.5
  }
}

export const AppliancesComponent = () => {
  return (
    <>
      <motion.div key="washing-machine-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>
        <h1 className="font-bold text-[24px] mb-4">Appliance Installations</h1>
        <ul className="list-disc ml-5">
          <li>Dishwasher</li>
          <li>Wall Ovens</li>
          <li>Rangehood / Chimney Hood Fans with Ventilation</li>
          <li>OTR / Microwave</li>
          <li>Built-in Fridges and Freezers<br />(Specializes in Luxury Appliance)</li>
          <li>Door Panels</li>
          <li>Washer and Dryers with Side Venting</li>
          <li>Cooktops</li>
        </ul>
      </motion.div>
      <motion.div key="washing-machine-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image src={Viking} alt="viking" style={{boxShadow: "2px 2px 8px gray"}} />
      </motion.div>
    </>
  )
}

export const KitchenComponent = () => {
  return (
    <>
      <motion.div key="kitchen-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="kitchen-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const PlumbingComponent = () => {
  return (
    <>
      <motion.div key="plumbing-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>
      <h1 className="font-bold text-[24px] mb-4">Plumbing</h1>
      <ul className="list-disc ml-5">
        <li>Kitchen and Bathroom Sinks and Faucets</li>
        <li>Toilets</li>
        <li>Garburator</li>
        <li>Vanities</li>
      </ul>
      </motion.div>
      <motion.div key="plumbing-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const ElectricalComponent = () => {
  return (
    <>
      <motion.div key="electrical-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>
        <h1 className="font-bold text-[24px] mb-4">Electrical</h1>
        <ul className="list-disc ml-5">
          <li>Light Fixtures</li>
          <li>Ceiling Fans</li>
          <li>Air Conditioners</li>
          <li>TV Wall Mount</li>
          <li>On Demand festive lighting and decoration</li>
        </ul>
      </motion.div>
      <motion.div key="electrical-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const FurnitureComponent = () => {
  return (
    <>
      <motion.div key="furniture-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>
        <h1 className="font-bold text-[24px] mb-4">Furniture</h1>
        <ul className="list-disc ml-5">
          <li>Bed Assembly</li>
          <li>Bookshelf Assembly</li>
          <li>Patio Furniture Assembly</li>
          <li>Wardrobe Assembly</li>
          <li>Walk-in Closet Installation</li>
          <li>Cabinet Makeover</li>
          <li>All Kinds of Appliance Door Panels</li>
        </ul>
      </motion.div>
      <motion.div key="furniture-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const CustomCabinetsComponent = () => {
  return (
    <>
      <motion.div key="painting-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>
        <h1 className="font-bold text-[24px] mb-4">Custom Cabinets</h1>
        <ul className="list-disc ml-5">
         <li>We offer expert design, build, and installation services for custom cabinets tailored specifically to enhance the functionality and aesthetics of your kitchen, bathroom, and den area. Our team works closely with you to create personalized cabinetry solutions that meet your unique needs, using high-quality materials and precise craftsmanship to ensure a perfect fit in every room of your home.</li>
        </ul>
      </motion.div>
      <motion.div key="painting-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}