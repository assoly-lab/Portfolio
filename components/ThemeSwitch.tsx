'use client'

import { useTheme } from "next-themes"
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDarkMode,MdLightMode } from "react-icons/md";



export default function ThemeSwitch(){
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

    if (resolvedTheme === 'dark') {
        return <MdLightMode className="w-7 h-7 text-orange-300 hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer" onClick={() =>{
          setTheme('light')
          }} />
      }
    
      if (resolvedTheme === 'light') {
        return <MdDarkMode className="w-7 h-7 text-gray-500 hover:text-black transition-all duration-300 ease-in-out cursor-pointer" onClick={() =>{
          setTheme('dark')
          }} />
      }

      return (
        <></>

      )
}