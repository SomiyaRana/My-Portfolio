// import React from "react";
// import { useRef } from "react";
// import Card from "../components/Card";
// const About = () => {
//   const grid2Container = useRef();
//   return (
//     <section className="c-space section-spacing">
//       <h2 className="text-heading">About Me </h2>
//       <div
//         className="grid grid-cols-1 gap-4 md:grid-cols-6
//        md:auto-rows-[18rem] mt-12"
//       >
//         {/* Grid 1 */}
//         <div className="flex items-end grid-default-color grid-1">
//           <img
//             src="assets/coding-pov.png"
//             className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
//           />
//           <div className="z-10 ">
//             <p className="headtext">I'm Somiya Rana</p>
//             <p className="subtext">
//               Aspiring Full Stack Developer passionate about building clean,
//               scalable code and creating seamless user experiences through
//               hands-on projects and learning.
//             </p>
//           </div>
//           <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
//         </div>
//         {/* Grid 2 */}

//         <div className="grid-default-color  grid grid-2">
//           <div
//             ref={grid2Container}
//             className="flex items-center justify-center w-full h-full"
//           >
//             <p className="flex items-end text-5xl text-gray-500">
//               CODE IS CRAFT
//             </p>
//             <Card
//               style={{ rotate: "75deg", top: "30%", left: "20%" }}
//               text="GRASP"
//               containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "30deg", top: "60%", left: "45%" }}
//               text="SOLID"
//               containerRef={grid2Container}
//             />

//             <Card
//               style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
//               text="Design Patterns"
//               containerRef={grid2Container}
//             />

//             <Card
//               style={{ rotate: "-45deg", top: "55%", left: "0%" }}
//               text="Design Principles"
//                containerRef={grid2Container}
//             />

//             <Card
//               style={{ rotate: "20deg", top: "10%", left: "38%" }}
//               text="SRP"
//            containerRef={grid2Container}
//             />
//             <Card
//               style={{ rotate: "30deg", top: "70%", left: "70%" }}
//               image="/public/logos/React.svg"
//                containerRef={grid2Container}
//             />

//             <Card
//               style={{ rotate: "-35deg", top: "70%", left: "25%" }}
//               image="/public/logos/tailwindcss.svg"
//                containerRef={grid2Container}
//             />

//             <Card
//               style={{ rotate: "-35deg", top: "5%", left: "10%" }}
//               image="/public/logos/git.svg"
//                containerRef={grid2Container}
//             />
//           </div>
//         </div>
//         {/* Grid 3 */}
//         <div className="grid-black-color grid-3"></div>
//         {/* Grid 4 */}
//         <div className="grid-special-color grid-4"></div>
//         {/* Grid 5 */}
//         <div className="grid-default-color grid-5"></div>
//       </div>
//     </section>
//   );
// };

// export default About;


import useTilt from "../utils/tilt.js";
import { Globe } from "../components/Globe";
import React from "react";
import { useRef } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks.jsx";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
const About = () => {
  const tiltRef1 = useTilt();
  const tiltRef2 = useTilt();
  const tiltRef3 = useTilt();
  const tiltRef4 = useTilt();
  const tiltRef5 = useTilt();

  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-6
       md:auto-rows-[18rem] mt-12"
      >
        {/* Grid 1 */}
        <div
          ref={tiltRef1}
          className="flex items-end grid-default-color grid-1 tilt-hover"
        >
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 ">
            <p className="headtext">I'm Somiya Rana</p>
            <p className="subtext">
              Aspiring Full Stack Developer passionate about building clean,
              scalable code and creating seamless user experiences through
              hands-on projects and learning.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div ref={tiltRef2} className="grid-black-color grid grid-2  ">
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
              text="Design Patterns"
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

            {/* <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="/assets/logos/React.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-35deg", top: "70%", left: "25%" }} image="/assets/logos/tailwindcss.svg" containerRef={grid2Container} /> */}
            {/* <Card
              style={{ rotate: "-35deg", top: "5%", left: "10%" }}
              image="/assets/logos/git.svg"
              containerRef={grid2Container}
            /> */}

            {/* <Card style={{ rotate: "-15deg", top: "15%", left: "5%" }} image="/assets/logos/Node.js.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "25deg", top: "20%", left: "75%" }} image="/assets/logos/aws_icon_146074.svg" containerRef={grid2Container} /> */}
            {/* <Card
              style={{ rotate: "-20deg", top: "75%", left: "10%" }}
              image="/assets/logos/visualstudiocode.svg"
              containerRef={grid2Container}
            /> */}
            {/* <Card style={{ rotate: "15deg", top: "40%", left: "80%" }} image="/assets/logos/javascript.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-10deg", top: "5%", left: "50%" }} image="/assets/logos/html5.svg" containerRef={grid2Container} /> */}
            {/* <Card
              style={{ rotate: "10deg", top: "50%", left: "30%" }}
              image="/assets/logos/java-svgrepo-com.svg"
              containerRef={grid2Container}
            /> */}
            {/* <Card
              style={{ rotate: "-25deg", top: "35%", left: "15%" }}
              image="/assets/logos/python-svgrepo-com.svg"
              containerRef={grid2Container}
            /> */}
            {/* <Card style={{ rotate: "20deg", top: "65%", left: "55%" }} image="/assets/logos/MySQL.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-15deg", top: "50%", left: "5%" }} image="/logos/postgressql.svg" containerRef={grid2Container} /> */}
            {/* <Card
              style={{ rotate: "30deg", top: "80%", left: "40%" }}
              image="/assets/logos/github.svg"
              containerRef={grid2Container}
            /> */}
            {/* <Card style={{ rotate: "-20deg", top: "25%", left: "60%" }} image="/assets/logos/Express.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "15deg", top: "10%", left: "85%" }} image="/logos/css3.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-15deg", top: "70%", left: "50%" }} image="/assets/logos/microsoft.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "25deg", top: "30%", left: "10%" }} image="/assets/logos/MongoDB.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-25deg", top: "60%", left: "5%" }} image="/assets/logos/Socket.io.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "10deg", top: "20%", left: "90%" }} image="/assets/logos/threejs.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-10deg", top: "15%", left: "40%" }} image="/assets/logos/azure.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "20deg", top: "5%", left: "30%" }} image="/logos/vitejs.svg" containerRef={grid2Container} /> */}
            {/* <Card style={{ rotate: "-20deg", top: "85%", left: "60%" }} image="/logos/xml.svg" containerRef={grid2Container} /> */}
          </div>
        </div>
        {/* Grid 3 */}
        <div ref={tiltRef3} className="grid-black-color grid-3 ">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone </p>
            <p className="subtext">
              I,m based in Mars, and open to work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div ref={tiltRef4} className="grid-black-color grid-4 ">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start the project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div ref={tiltRef5} className="grid-black-color grid-5 ">
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
        </div>
      </div>
    </section>
  );
};

export default About;
