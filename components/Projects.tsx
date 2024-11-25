
import Reveal from "./Reveal";
import { ProjectsList } from "@/utils/ProjectsList";
import Project from "./Project";



export default function Projects(){
    return (
        <>
            <Reveal x={-100} opacity={0} >
                <h1 id='projects' className="relative text-4xl font-semibold z-20 w-fit ">My Projects
                    <span className="absolute top-6 left-1 w-full h-6 bg-[#86A0ED] -z-10"></span>
                </h1>
            </Reveal>
                <div className="w-full flex-col ">
                {
                    ProjectsList.map((projectObject,index)=>{
                        const key = Object.keys(projectObject)[0]
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