import { localeProject } from "@/utils/Types";
import Link from "next/link";
import { GoBroadcast } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Reveal from "./Reveal";
import { useLocale, useTranslations } from "next-intl";





export default function Project({project}:{project:localeProject}){

    const t = useTranslations("projects")
    const locale = useLocale()
    
    return (
        <div className="w-full flex flex-col md:flex-row gap-4 md:py-4 overflow-hidden">
            <div className="md:w-[45%] flex md:flex-col flex-row gap-4">
                <Reveal x={-100} opacity={0}>
                    <div className="flex flex-col gap-4">
                    <p className="text-xl text-gray-400 dark:text-gray-200 ">{t("type")}</p>
                    <p className="text-4xl font-semibold text-[#8A3FFC]">{project[locale].title}</p>
                        <div className="flex flex-wrap h-fit gap-1 ">
                        {
                        project[locale].technologies.map((tech:string,index:number)=>{
                            return (
                                <div key={index} className="text-xs bg-[#86A0ED] text-white py-2 px-1" >
                                    <p className="font-semibold">{tech}</p>
                                </div>
                            )
                            })
                        }
                        </div>
                        <div className="">
                            <p className="font-medium text-lg">{project[locale].description}</p>
                        </div>
                        <div className="links flex gap-2">
                            <Link  target={'_blank'} href={project[locale].links.live} className="text-base text-white bg-[#8A3FFC] hover:bg-[#651cd1] rounded-md px-2 py-1 flex justify-center items-center gap-2 font-semibold">Live
                            <GoBroadcast className="w-5 h-5" />
                            </Link>
                            <Link  target={'_blank'} href={project[locale].links.repos.frontend} className="text-base text-black border-2 border-black dark:border-white dark:border-2 dark:text-white dark:hover:bg-white dark:hover:text-black rounded-md px-2 py-1 flex justify-center items-center gap-2 hover:text-white hover:bg-black transition-all duration-300 ease-in-out font-semibold">Frontend
                                <FaGithub className="w-5 h-5" />
                            </Link>
                            {project[locale].links.repos.backend && 
                            <Link  target={'_blank'} href={project[locale].links.repos.backend!} className="text-base text-black border-2 border-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black rounded-md px-2 py-1 flex justify-center items-center gap-2 hover:text-white hover:bg-black transition-all duration-300 ease-in-out font-semibold">Backend
                                <FaGithub className="w-5 h-5" />
                            </Link>
                            }
                        </div>
                    </div>
                    </Reveal>
                </div>
                <div className="flex-1 w-full">
                    <Reveal x={100} opacity={0}>
                        <Image src={project[locale].image} width={1000} height={750} alt="Project's mockup on a laptop and a mobile phone" className="w-auto h-auto"  />
                    </Reveal>
                </div>
        </div>
    )
}