import React, { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { IoMenuOutline, IoCloseOutline, IoLogoGithub } from "react-icons/io5";
import Lottie from "react-lottie";
import menuIconData from "../public/icons/menu.json";
import NextLink from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", to: "/home", id: 1 },
  { name: "Game", to: "/game", id: 2 },
  { name: "Engine", to: "/engine", id: 3 },
  { name: "Team", to: "/team", id: 4 },
  { name: "Production", to: "/production", id: 5 },
  { name: "Gallery", to: "/gallery", id: 6 },
  { name: "Postmortem", to: "/postmortem", id: 7 },
  {
    name: "View Source",
    to: "https://github.com/Chamfer-Studios/Dune-Special-Spice-Ops",
    id: 8,
  },
];
export default function NewNavbar() {
  const [menuState, setMenuState] = useState({ isStopped: true, direction: 1 });

  const [open, cycleOpen] = useCycle(false, true);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: menuIconData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  return (
    <nav>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="flex flex-col justify-center w-1/2  h-full bg-dune-orangespicy fixed right-0 z-10"
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            exit={{
              width: 0,
              transition: { delay: 1.6, duration: 0.3 },
            }}
          >
            <motion.div
              className="my-20 mx-6 "
              initial="closed"
              animate="open"
              variants={sideVariants}
              exit="closed"
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  className="text-white no-underline text-3xl font-semibold block m-5"
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="bg-transparent flex w-full justify-between py-1 items-center shadow-md">
        <button
          className="pointer mx-5 border-none py-2 px-4 invisible"
          onClick={() => {
            cycleOpen();
            setMenuState({ isStopped: false, direction: open ? -1 : 1 });
          }}
        >
          {" "}
          <Lottie
            className="block"
            isStopped={menuState.isStopped}
            options={defaultOptions}
            direction={menuState.direction}
            height={32}
            width={32}
            speed={0.6}
          />
        </button>
        <div className="cursor-pointer">
          <NextLink href="/">
            <a href="">
              <Image
                layout="intrinsic"
                src="/contents/corporative/logo.png"
                width="50px"
                height="50px"
                onClick={() => {
                  cycleOpen(false);
                  setMenuState({ isStopped: false, direction: open ? -1 : 1 });
                }}
              ></Image>
            </a>
          </NextLink>
        </div>
        <button
          className="pointer mx-5 my-3 border-none py-2 px-4 z-10"
          onClick={() => {
            cycleOpen();
            setMenuState({ isStopped: false, direction: open ? -1 : 1 });
          }}
        >
          {" "}
          <Lottie
            className="block"
            isStopped={menuState.isStopped}
            options={defaultOptions}
            direction={menuState.direction}
            height={32}
            width={32}
            speed={0.6}
          />
        </button>
      </div>
    </nav>
  );
}