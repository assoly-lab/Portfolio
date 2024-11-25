'use client'

import {motion} from "framer-motion"
import React from "react"
 
type RevealProps = {
    children : React.ReactNode,
    x?:number,
    y?:number,
    opacity?:number,
    scale?:number,
    delay?:number
}

export default function Reveal({children,x=0,y=0,opacity=1,scale=1,delay=0}:RevealProps){

    
    return (
    <motion.div
    initial={{opacity,scale,x,y }}
    whileInView={{opacity:1,scale:1,x:0}}
    viewport={{once:true,amount:0.2}}
    transition={{duration:0.4,ease:'easeInOut',delay}}
>
        {children}
    </motion.div>
    )
}