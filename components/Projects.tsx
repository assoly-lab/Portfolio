
import Reveal from "./Reveal";
import { ProjectsList } from "@/utils/ProjectsList";
import Project from "./Project";
import { useTranslations } from "next-intl";



export default function Projects(){
    const t = useTranslations("projects")

    return (
        <>
            <Reveal x={-100} opacity={0} >
                <h1 id='projects' className="relative text-4xl font-semibold z-20 w-fit ">{t("title")}
                    <span className="absolute top-6 left-1 w-full h-6 bg-[#86A0ED] -z-10"></span>
                </h1>
            </Reveal>
                <div className="w-full flex-col ">
                {
                    ProjectsList.map((projectObject,index)=>{
                        const key:string = Object.keys(projectObject)[0]
                        const project = projectObject[key]
                        return (
                            <Project key={index} project={project} />
                        )
                    })
                }
                </div>
        </>
    )
}