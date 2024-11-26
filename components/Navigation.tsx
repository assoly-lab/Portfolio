'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin,FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import ThemeSwitch from "./ThemeSwitch";
import {AnimatePresence, motion} from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";


export default function Navigation(){
    const [menu,setMenu] = useState<boolean>(false)
    const t = useTranslations("navigation")
    const locale = useLocale()
    const router = useRouter()

    const handleOnChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        const newLocale = e.target.value as string
        if(locale != newLocale){
            router.push(`/${newLocale}`)
        }
    }

    return (
        <>
            <AnimatePresence>
                {menu && 
                <motion.div 
                initial={
                    {
                    clipPath:'circle(0% at 100% 0%)',
                    }
                }
                animate={{
                    clipPath:'circle(150% at 100% 100%)',
                    transition:{ duration: 0.5, delay: 0.3,ease:'easeInOut' }
                }}
                exit={{
                    clipPath:'circle(0% at 100% 0%)',
                    transition :{ duration: 0.5,delay:0.3,ease:'easeInOut' }
                }}
                className="fixed flex z-40 w-full h-screen max-h-screen bg-[#8A3FFC]">
                    <motion.div 
                    initial={
                        {
                        clipPath:'circle(0% at 100% 0%)',
                        }
                    }
                    animate={{
                        clipPath:'circle(150% at 100% 100%)',
                        transition :{ duration: 0.5, delay: 0.5, ease:'easeInOut' }

                        
                    }}
                    exit={{
                        clipPath:'circle(0% at 100% 0%)',
                        transition :{ duration: 0.5, ease:'easeInOut' }
                    }}
                    transition={{ duration: 0.5 }}
                    className="fixed flex z-40 w-full h-screen max-h-screen flex-col justify-center items-center gap-4 text-2xl font-semibold overflow-hidden  bg-white dark:bg-blue-950">
                        <Link href={'#skills'} className="relative text-gray-500 dark:text-white transition-all duration-300 hover:text-[#8A3FFC] group" 
                        onClick={()=>setMenu(false)}
                        >{t("skills")}
                            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#8A3FFC] dark:bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href={'#projects'} scroll className="relative text-gray-500 dark:text-white transition-all duration-300 hover:text-[#8A3FFC] group" 
                        onClick={()=>setMenu(false)}
                        >{t("projects")}
                            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#8A3FFC] dark:bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href={'#contact'} className="relative text-gray-500 dark:text-white transition-all duration-300 hover:text-[#8A3FFC] group" 
                        onClick={()=>setMenu(false)}
                        >{t("contact")}
                            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#8A3FFC] dark:bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>   
                    </motion.div>
                </motion.div>
                }
            </AnimatePresence>
            <div className="w-[90%] md:w-[80%] h-24 flex justify-between items-center flex-row-reverse md:flex-row text-2xl py-4 cursor-pointer" >
                <div
                className="hambuerger w-12 h-fit flex flex-col gap-2 md:hidden z-50 group" onClick={(e)=>{
                    e.stopPropagation()
                    setMenu((prev:boolean)=>!prev)
                    }} >
                    <div 
                    style={{
                    transform:  menu ? 'rotatez(-45deg) translate(-5px,10px) '  : 'rotatez(0deg)',
                    backgroundColor: menu ? '#ef4444' : undefined
                    }} 
                    className="w-full h-2 bg-[#8a3ffc] group-hover:bg-[#6620cf] dark:bg-white dark:group-hover:bg-gray-200 transition-all duration-300"
                        
                    ></div>
                    {!menu && <div className="w-full h-2 bg-[#8a3ffc] group-hover:bg-[#6620cf] dark:bg-white dark:group-hover:bg-gray-200 transition-all duration-300"></div>}
                    <div 
                    style={{
                        transform: menu ? 'rotatez(45deg) translate(0px,-8px)' : 'rotatez(0deg)',
                        backgroundColor: menu ? '#ef4444' : undefined
                    }}
                    className="w-full h-2 bg-[#8a3ffc] group-hover:bg-[#6620cf]  dark:bg-white dark:group-hover:bg-gray-200 transition-all duration-300 "></div>
                </div>
                <div className="left md:flex gap-8 text-xl hidden" >
                    <Link href={'#skills'} className="relative text-gray-500 dark:text-white transition-all duration-300 hover:text-[#8A3FFC] group" >{t("skills")}
                        <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#8A3FFC] dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link href={'#projects'} scroll className="relative text-gray-500 dark:text-white transition-all duration-300 hover:text-[#8A3FFC] group" >{t("projects")}
                        <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#8A3FFC] dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link href={'#contact'} className="relative text-gray-500 dark:text-white transition-all duration-300 hover:text-[#8A3FFC] group" >{t("contact")}
                        <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#8A3FFC] dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </Link>    
                            
                </div>
                <div className="middle w-fit hidden" >
                    <Link href={'/'} className="text-white dark:text-blue-950 bg-blue-950 dark:bg-white rounded-full p-2 font-semibold">A.A</Link>
                </div>
                <div className="right flex md:flex-row flex-row-reverse gap-4 text-xl " >
                    <Link href={'https://linkedin.com/profile/'} target={'_blank'}><FaLinkedin className="w-7 h-7 text-blue-600 dark:text-blue-400 dark:hover:text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out cursor-pointer" /></Link>
                    <Link href={'mailto:abdelmajid.alahyane@gmail.com'}><MdEmail className="w-7 h-7 text-blue-600 dark:text-blue-400 dark:hover:text-blue-600 hover:text-blue-800 transition-all duration-300 ease-in-out cursor-pointer" /></Link>
                    <Link href={'https://github.com/assoly-lab'} target={'_blank'}><FaGithub className="w-7 h-7 text-gray-500 hover:text-black dark:text-white dark:hover:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer" /></Link>
                    <ThemeSwitch />
                    <select name="locale" id="locale" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>handleOnChange(e)} className="dark:bg-blue-950">
                        <option selected={locale === 'en'} value="en" className="py-2">EN</option>
                        <option selected={locale === 'fr'}  value="fr" className="py-2">FR</option>
                    </select>
                </div>
            </div>
        </>
    )
}