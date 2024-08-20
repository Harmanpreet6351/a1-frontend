import { HTMLMotionProps, motion } from "framer-motion"

const commonLeftAnimations: HTMLMotionProps<"div"> = {
  animate: {
    opacity: 1,
    x: 0
  },
  initial: {
    opacity: 0,
    x: -100,
  },
  exit: {
    opacity: 0,
    x: -100
  }
}

const commonRightAnimations: HTMLMotionProps<"div"> = {
  animate: {
    opacity: 1,
    x: 0
  },
  initial: {
    opacity: 0,
    x: 100,
  },
  exit: {
    opacity: 0,
    x: 100
  }
}

export const WashingMachingComponent = () => {
  return (
    <>
      <motion.div key="washing-machine-left" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="washing-machine-right" {...commonRightAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
    </>
  )
}

export const KitchenComponent = () => {
  return (
    <>
      <motion.div key="kitchen-left" {...commonLeftAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
      <motion.div key="kitchen-right" {...commonRightAnimations}>lorem ipsum lorem ipsum lorem ipsum</motion.div>
    </>
  )
}