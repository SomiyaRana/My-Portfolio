import { mySocials } from "../constants";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 200 },
    }),
  };

  return (
    <section
      ref={footerRef}
      className="flex flex-wrap items-center justify-between gap-5 pb-6 text-sm text-neutral-400 c-space"
    >
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Animated Tagline */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className="flex gap-2 text-center w-full justify-center"
      >
        🐱 Made while React was React-ing & Tailwind was Tail-winding 🌀
      </motion.div>

      {/* Social Icons */}
      <div className="flex gap-3 justify-center w-full">
        {mySocials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={iconVariants}
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </motion.a>
        ))}
      </div>

      {/* Copyright */}
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className="w-full text-center mt-2"
      >
        © 2025 Somiya Rana. All rights reserved.
      </motion.p>
    </section>
  );
};

export default Footer;
