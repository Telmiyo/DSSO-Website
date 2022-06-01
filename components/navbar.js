import React, { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline, IoLogoGithub } from "react-icons/io5";
import NextLink from "next/link";
import Image from "next/image";

export default function Navbar(props) {
  const [isActive, setActive] = useState(false);

  return (
    <nav {...props}>
      {/* Navbar */}
      <div className="bg-transparent flex w-full justify-between py-2 items-center">
        <IoMenuOutline className=" text-white text-2xl invisible ml-2" />
        <div className="cursor-pointer">
          <NextLink href="/">
            <Image
              layout="intrinsic"
              src="/logo.png"
              width="50px"
              height="50px"
              onClick={() => setActive(false)}
            ></Image>
          </NextLink>
        </div>
        <button
          className="text-gray text-2xl mr-2"
          onClick={() => (isActive ? setActive(false) : setActive(true))}
        >
          {isActive ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>
      </div>
      {/* SideBar Navbar */}

      <div
        className={`${
          isActive ? "flex" : "hidden"
        } bg-white text-black fixed right-0 w-1/2 h-screen flex-col justify-center items-center `}
      >
        <div className="mt-8 ">
          <NextLink href="/" passHref>
            <a onClick={() => setActive(false)}>Home</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/game" passHref>
            <a onClick={() => setActive(false)}>Game</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/engine" passHref>
            <a onClick={() => setActive(false)}>Engine</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/team" passHref>
            <a onClick={() => setActive(false)}>Team</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/production" passHref>
            <a onClick={() => setActive(false)}>Production</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/gallery" passHref>
            <a onClick={() => setActive(false)}>Gallery</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink href="/postmortem" passHref>
            <a onClick={() => setActive(false)}>Post Mortem</a>
          </NextLink>
        </div>
        <div className="mt-8 ">
          <NextLink
            href="https://github.com/Chamfer-Studios/Dune-Special-Spice-Ops"
            target="_blank"
            passHref
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
