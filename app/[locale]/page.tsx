import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {

  return (
    <div className="w-full relative flex flex-col items-center gap-16" >
        <Navigation />
      <div className="w-[90%] md:w-full md:min-h-[calc(100vh_-_8rem)] flex flex-col items-center justify-center overflow-hidden pt-4" >
        <Hero />
      </div>
      <div className="w-full md:min-h-screen flex flex-col items-center mt-10" >
        <div className="w-[90%] md:w-[80%] flex flex-col items-center md:flex-row gap-8 md:gap-4 overflow-hidden">
          <Skills/>
        </div>
      </div>
      <div className="w-full md:min-h-screen flex flex-col items-center overflow-hidden">
        <div className="w-[90%] md:w-[80%] flex flex-col gap-4 ">
          <Projects />
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
        <div className="w-[90%] md:w-[80%] flex flex-col gap-4 mb-8">
          <Contact />
        </div>
      </div>
    </div>
  );
}
