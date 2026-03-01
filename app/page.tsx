"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const popupVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: [0.8, 1.1, 1],
    y: 0,
    transition: {
      duration: 0.5,
      times: [0, 0.6, 1],
      ease: "easeOut",
    },
  },
};

const tileVariants = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: [0.8, 1.1, 1],
    y: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const tileClassName = `
  flex items-center justify-center
  w-36 h-36 sm:w-44 sm:h-44
  rounded-3xl
  bg-zinc-100 dark:bg-zinc-900
  text-zinc-700 dark:text-zinc-300
  font-semibold text-sm tracking-widest
  shadow-sm cursor-pointer
  hover:scale-105 hover:shadow-md
  transition-shadow duration-200
`;

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center 
    font-sans"
    >
      <main
        className="flex min-h-screen w-full 
      max-w-3xl flex-col items-center justify-between py-32 px-6 sm:px-16 
        sm:items-start"
      >
        <motion.div className="text-4xl m-0 text-center font-sans">
          <Typewriter
            options={{
              strings: `
                     szeklicki.com`,
              autoStart: true,
              delay: 0,
              cursor: "",
            }}
          />
        </motion.div>
        {/* TILES */}
        <div className="flex m-auto gap-4 flex-wrap justify-center sm:justify-start">
          <motion.div
            variants={tileVariants(0.6) as any}
            initial="hidden"
            animate="visible"
            className={tileClassName}
          >
            TILE 1
          </motion.div>

          <motion.div
            variants={tileVariants(0.65) as any}
            initial="hidden"
            animate="visible"
            className={tileClassName}
          >
            TILE 2
          </motion.div>
        </div>
      </main>
    </div>
  );
}
