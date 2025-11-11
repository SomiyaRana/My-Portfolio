import { Globe } from "../components/Globe";
import React, { useRef } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks.jsx";
import { Particles } from "../components/Particles";
import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1, // Stagger delay between each card
    },
  },
};

const cardFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

const cardFromRight = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

const About = () => {
  const tiltRef1 = useRef();
  const tiltRef2 = useRef();
  const tiltRef3 = useRef();
  const tiltRef4 = useRef();
  const tiltRef5 = useRef();
  const grid2Container = useRef();

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me </h2>

      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false, // 👈 Ensures it can run again
          amount: 0.1, // 👈 Lower amount makes it trigger faster
          margin: "-100px 0px -100px 0px", // 👈 Forces the section to be 'out of view' when it's sufficiently off-screen
        }} // Animation runs once when 20% visible
      >
        {/* Grid 1:  */}
        <motion.div
          ref={tiltRef1}
          className="grid-1 tilt-hover relative p-6 rounded-3xl overflow-hidden md:col-span-2 md:row-span-2"
          variants={cardFromLeft}
        >
          <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
          <div className="flex items-start space-x-6">
            <div className="relative flex-shrink-0">
              <img
                src="assets/aboutImage.png"
                alt="Somiya Rana Avatar"
                className="size-30 rounded-full object-cover border-4 border-gray-400 shadow-xl ring-2 ring-gray-500"
              />
            </div>

            <div className="pt-4 flex-grow">
              <p className="text-white text-sm font-semibold mb-4">
                I'm a Full Stack Developer
              </p>

              <div className="grid grid-cols-1 gap-y-1 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span role="img" aria-label="University">
                    🎓
                  </span>
                  <span>Dr. A. P. J. Abdul Kalam Technical University</span>
                  
                </div>
              
              </div>
             
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-700/50">
            <p className="text-gray-100 text-sm mt-2">
              Full Stack Developer creating seamless, scalable web applications
              that elegantly merge design with functionality.
            </p>

            <p className="text-gray-100 text-sm mt-2">
              Driven by a passion for clean code and crafting exceptional user
              experiences.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <h3 className="text-gray-100 text-lg  mb-3">Connect with me</h3>{" "}
            {/* Reduced mb-4 to mb-3 */}
            <div className="space-y-3 mb-0">
              {" "}
              <a
                href="https://www.linkedin.com/in/somiya-rana-b35152255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray hover:text-blue-400 transition-colors duration-300 group"
              >
                <img
                  src="socials/linkedIn.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 group-hover:scale-105 transition-transform"
                />
                <span className="text-lg ">SomiyaRana</span>
                <span className="ml-auto text-gray group-hover:text-blue-400">
                  ↗
                </span>
              </a>
              {/* GitHub Link */}
              <a
                href="https://github.com/SomiyaRana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-white hover:text-purple-400 transition-colors duration-300 group"
              >
                <img
                  src="assets/logos/github.svg"
                  alt="GitHub"
                  className="w-6 h-6 group-hover:scale-105 transition-transform"
                />
                <span className="text-lg">Somiya09</span>
                <span className="ml-auto text-gray-00 group-hover:text-purple-400">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Grid 2:  */}
        <motion.div
          ref={tiltRef2}
          className="grid-black-color  grid-2"
          variants={cardFromRight}
        >
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Database"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "60%", left: "45%" }}
              text="Frontend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Backend"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="UI/UX"
              containerRef={grid2Container}
            />
          </div>
        </motion.div>

        {/* Grid 3: */}
        <motion.div
          ref={tiltRef3}
          className="grid-black-color grid-3 relative overflow-hidden" // 'relative' and 'overflow-hidden' for positioning and containing the glow
          variants={cardFromRight}
        >
          {/* Original Content */}
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone </p>
            <p className="subtext">
              I'm based in Mars, and open to work worldwide
            </p>
          </div>

          <figure className="absolute left-[30%] top-[10%] z-0">
            <Globe />
          </figure>
        </motion.div>

        {/* Grid 4: */}
        <motion.div
          ref={tiltRef4}
          className="grid-black-color grid-4 "
          variants={cardFromLeft}
        >
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start the project together?
            </p>
            <CopyEmailButton />
          </div>
        </motion.div>

        {/* Grid 5: */}
        <motion.div
          ref={tiltRef5}
          className="grid-black-color grid-5 "
          variants={cardFromRight}
        >
          <div className="z-10 w-[50%] ">
            <p className="headtext">Stack & Skills</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
