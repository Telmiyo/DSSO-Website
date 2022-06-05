import React, { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline, IoLogoGithub } from "react-icons/io5";
import NextLink from "next/link";
import Image from "next/image";
import Lottie from "react-lottie";
import menuIconData from "../public/icons/menu.json";
export default function Navbar(props) {
  const [isActive, setActive] = useState(false);
  const [menuState, setMenuState] = useState({ isStopped: true,direction:1 });
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: menuIconData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  return (
    <nav {...props}>
      {/* Navbar */}
      <div className="bg-transparent flex w-full justify-between py-2 items-center shadow-md">
        <IoMenuOutline className=" text-white text-2xl invisible ml-2" />
        <div className="cursor-pointer">
          <NextLink href="/">
            <a href="">
            <Image
              layout="intrinsic"
              src="/contents/corporative/logo.png"
              width="50px"
              height="50px"
              onClick={() => setActive(false)}
            ></Image>
            </a>
            
          </NextLink>
        </div>
        <button
          className="text-gray text-2xl mr-2"
          onClick={() => {
            isActive ? setActive(false) : setActive(true);
          
            setMenuState({ isStopped: false,direction:isActive?-1:1 })
              
          }}
        >
          <Lottie
            className="block"
            isStopped={menuState.isStopped}
            options={defaultOptions}
            direction={menuState.direction}
            height={32}
            width={32}
           
          />
        </button>
      </div>
      {/* SideBar Navbar */}

      <div
        className={`${
          isActive ? "flex" : "hidden"
        } bg-white text-black fixed right-0 w-1/2 h-screen flex-col justify-center items-center z-10`}
      >
        <div className="mt-8 ">
          <NextLink href="/" >
            <a onClick={() => setActive(false)}>Home</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/game" >
            <a onClick={() => setActive(false)}>Game</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/engine" >
            <a onClick={() => setActive(false)}>Engine</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/team" >
            <a onClick={() => setActive(false)}>Team</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/production" >
            <a onClick={() => setActive(false)}>Production</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/gallery" >
            <a onClick={() => setActive(false)}>Gallery</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/postmortem" >
            <a onClick={() => setActive(false)}>Post Mortem</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink
            href="https://github.com/Chamfer-Studios/Dune-Special-Spice-Ops"
            target="_blank"
            
          >
            <a
              className="flex flex-row items-center"
              onClick={() => setActive(false)}
            >
              <IoLogoGithub className="mr-2" />
              View Source
            </a>
          </NextLink>
        </div>
      </div>
    </nav>
  );
}
