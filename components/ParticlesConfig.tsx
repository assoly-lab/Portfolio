"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, Engine, MoveDirection } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticlesConfig() {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const particlesContainerRef = useRef<Container | null>(null);



  // Theme-specific options
  const lightThemeOptions = {
    particles: { color: { value: "#eb3bd7" } },
    links: { color: "#eb3bd7", opacity: 0.3, width: 1,distance: 100,
    enable: true, },
    background: { color: "#ffffff" }  
  };

  const darkThemeOptions = {
    particles:{ color: { value: "#fff" } },
    links: { color: "#fff", opacity: 0.3, width: 1,distance: 100,enable:true },
    background: { color: "#172554" }
  };

  // Combine global options with the current theme options
  const getParticlesOptions = () => {
    const themeOptions = theme === "dark" ? darkThemeOptions : lightThemeOptions;
    console.log( {
      ...themeOptions })
    return {
      fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { density: { enable: true }, value: 700 },
      move: { enable: true, speed: 3,direction:MoveDirection.none},
      opacity: { value: 0.3 },
      shape: { type: ["triangle",'square'] },
      size: { value: { min: 3, max: 5 } },
      color: { value: themeOptions.particles.color.value },
      links:{ color: themeOptions.links.color, opacity: themeOptions.links.opacity,width:1,distance:100,enable:true }
    },
    background: {color: themeOptions.background.color} ,
    detectRetina: true,
     };
  };

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Update particles theme dynamically when theme changes
  // useEffect(() => {
  //   const selectedTheme = theme === "dark" ? "dark" : "light";
  //   console.log("Applying tsparticles theme:", selectedTheme);

  //   if (particlesContainerRef.current) {
  //     particlesContainerRef.current
  //       .loadTheme(selectedTheme)
  //       .then(() => {
  //         particlesContainerRef.current?.refresh(); // Ensure the theme visually updates
  //       })
  //   }
  //   const allThemes = particlesContainerRef.current?.actualOptions.themes;
  //   console.log("Available themes in tsparticles:", allThemes);
  // }, [theme]);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      if (container && !particlesContainerRef.current) {
        particlesContainerRef.current = container; // Set container reference
        console.log("Particles container loaded.");
      }
    },
    []
  );

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={getParticlesOptions()}
        />
      )}
    </>
  );
}