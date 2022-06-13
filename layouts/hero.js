import { motion } from "framer-motion";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

import React from "react";
const Hero = () => {
  return (
    <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-0">
      <motion.div
        className=" text-center lg:text-left space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <h1 className="text-6xl font-semibold ">Dune: Special Spice Ops</h1>
        <p className="pt-1 text-xl">
          A world succumbed by the tirany of the Harkonnen desperate for someone
          who will deliver the Fremmen. Will you be the one to save them?
        </p>
        <a
          download="file"
          // href={require("")}
          className="border-none outline-none inline-block py-[10px] px-[25px] bg-dune-orangespicy text-center cursor-pointer no-underline rounded-md text-dune-white font-bold text-lg"
        >
          Download Now
        </a>
      </motion.div>
      <motion.div
        className="h-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1,
            },
          },
        }}
      >
        <Spline scene="https://prod.spline.design/BaYZhcMXvOtKxU8q/scene.splinecode" className="h-[60vh]"/>
      </motion.div>
    </div>
  );
};

export default Hero;
