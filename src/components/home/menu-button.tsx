"use client"

import { Menu } from "lucide-react"
import { useCallback, useRef, useState } from "react"

export default function MenuButton() {

  const handleClick = useCallback(() => {
    const menu = document.getElementById("mobile-menu")
    menu?.classList.toggle("max-h-0")
    menu?.classList.toggle("max-h-[40rem]")
  }, [])

  return <Menu className="text-white block sm:hidden" onClick={handleClick} />
}