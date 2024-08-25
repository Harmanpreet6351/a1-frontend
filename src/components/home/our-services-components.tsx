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

export const WashingMachingComponent = () => {
  return (
    <>
      <motion.div key="washing-machine-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
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
      <motion.div key="plumbing-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="plumbing-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const ElectricalComponent = () => {
  return (
    <>
      <motion.div key="electrical-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="electrical-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const FurnitureComponent = () => {
  return (
    <>
      <motion.div key="furniture-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="furniture-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}

export const PaintingComponent = () => {
  return (
    <>
      <motion.div key="painting-left" className="w-full lg:w-1/2" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="painting-right" className="w-full lg:w-1/2" {...commonRightAnimations}>
        <Image className="shadow-2xl" src={Viking} alt="viking" />
      </motion.div>
    </>
  )
}