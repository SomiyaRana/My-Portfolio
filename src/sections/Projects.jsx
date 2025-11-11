// import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue } from "framer-motion"; // Ensure you import from 'framer-motion'

// 1. Define the variants for a single item coming from the left
const cardFromLeft = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, duration: 0.8 },
  },
};

// 2. Define the container variants to stagger the items
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1, // Stagger delay between each project
    },
  },
};

const Projects = () => {
  // ... (Hooks and Handlers remain the same) ...
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const springX = useSpring(x, { damping: 10, stiffness: 50 });
  // const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  
  // const [preview, setPreview] = useState(null);

  return (
    <section 
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing" 
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        // ⚠️ THE CRITICAL CHANGE IS HERE ⚠️
        viewport={{ 
          once: false, // <-- Set to false to allow re-running the animation
          amount: 0.2 // Trigger when 20% of the container is visible
        }} 
      >
        {myProjects.map((project) => (
          <motion.div key={project.id} variants={cardFromLeft}>
            {/* <Project {...project} setPreview={setPreview} /> */}
            <Project {...project}/>
          </motion.div>
        ))}
      </motion.div>
{/* 
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
       */}
    </section>
  );
};

export default Projects;