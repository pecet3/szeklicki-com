"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center 
    font-sans "
    >
      <main
        className="flex min-h-screen w-full 
       flex-col items-center justify-center py-32 px-6 sm:px-16 
        sm:items-start"
      >
        <motion.div
          className="text-7xl font-bold m-auto
           text-center font-sans tracking-widest text-white
        "
        >
          <Typewriter
            options={{
              strings: `SZEKLICKI NIERUCHOMOŚCI`,
              autoStart: true,
              delay: 20,
              cursor: "",
            }}
          />
        </motion.div>
        {/* TILES */}
        <div className="flex m-auto gap-12  justify-center sm:justify-start">
          {/* TILE 1 */}
          <motion.a
            href="https://preview--estate-wise-panel.lovable.app/"
            variants={{
              hidden: { opacity: 0, scale: 0, y: 20 },
              visible: {
                opacity: 1,
                scale: [0.1, 1.2, 1],
                y: [-200, 0],
                x: [-200, 0],
                transition: {
                  delay: 0.5,
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex bg-white/50 flex-col justify-center items-center hover:scale-105 pt-4 px-3 pb-4
              border border-cyan-500 hover:cursor-pointer
                  backdrop-blur-xs  hover:ring-cyan-400 hover:ring-2 
                  hover:shadow-xl hover:shadow-cyan-400/30
                  rounded-xl shadow-lg  transition duration-300  w-full"
          >
            <Image
              src={"/consulting-logo1.png"}
              width={400}
              height={400}
              alt="consulting"
            />
          </motion.a>
          {/* TILE 2 */}
          <motion.a
            href="https://zn.szeklicki.com"
            variants={{
              hidden: { opacity: 0, scale: 0, y: 20 },
              visible: {
                opacity: 1,
                scale: [0.1, 1.2, 1],
                y: [200, 0],
                x: [200, 0],
                transition: {
                  delay: 0.6,
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center hover:scale-105 
            pt-4 px-3 pb-4
              border border-red-400 hover:cursor-pointer
                    bg-white/50 backdrop-blur-xs
                     hover:ring-red-500 hover:ring-2 hover:shadow-xl 
                     hover:shadow-red-500/40
                  rounded-xl shadow-lg  transition duration-300  w-full"
          >
            <Image
              src={"/zn-logo.png"}
              width={400}
              height={400}
              alt="consulting"
            />
          </motion.a>
        </div>
      </main>
    </div>
  );
}
