"use client"

import { Menu } from "lucide-react"


export default function MenuButton() {

  const handleClick = () => {
    const menu = document.querySelector("#mobile-menu")
    menu?.classList.toggle("max-h-0")
    menu?.classList.toggle("max-h-[40rem]")
  }

  return <Menu className="text-white block sm:hidden" onClick={handleClick} />
}