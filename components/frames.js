import Image from "next/image";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import NextLink from "next/link";

const SetRoleColor = (_role) => {
  switch (_role) {
    case "Programmer":
      return "bg-roles-programmer";
    case "Designer":
      return "bg-roles-designer";
    case "Artist":
      return "bg-roles-artist";
    case "Lead Programmer":
      return "bg-roles-leadprogrammer";
    case "Lead Designer":
      return "bg-roles-leaddesigner";
    case "Lead Artist":
      return "bg-roles-artist";
    case "Producer":
      return "bg-roles-producer";
  }

  return "bg-gray-200";
};

const SetToolColor = (_role) => {
  switch (_role) {
    case "Programmer":
      return "bg-red-200";
    case "Designer":
      return "bg-blue-200";
    case "Artist":
      return "bg-green-200";
    case "Producer":
      return "bg-purple-300";
  }

  return "bg-gray-200";
};

export const MemberFrame = ({ src, name, role, github, linkdn, href }) => {
  return (
    <div className="rounded-xl shadow-xl w-auto h-auto px-8 ">
      <div className="flex flex-col justify-around h-100 space-y-4 py-4 items-center">
        <NextLink key={href} href={href} passHref>
          <a>
            <Image
              src={src}
              width={120}
              height={120}
              objectFit="cover"
              className="rounded-full"
              alt="memberImg"
            />
          </a>
        </NextLink>
        <p>{name}</p>
        <div
          className={`${SetRoleColor(
            role
          )} text-center text-white rounded-xl w-40`}
        >
          {role}
        </div>
        <div className="flex flex-row space-x-4">
          <a href={github} target="_blank">
            <IoLogoGithub size={35} />
          </a>
          <a href={linkdn} target="_blank">
            <IoLogoLinkedin size={35} className="text-blue-500 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ToolFrame = ({ src, role, name, desc }) => {
  return (
    <div className="rounded-xl shadow-xl w-auto ">
      <div className="flex flex-row justify-start h-auto space-x-4 p-4 items-center">
        <div className={`${SetToolColor(role)} text-center rounded-xl p-1`}>
          <Image
            src={src}
            width={50}
            height={50}
            // objectFit="cover"
            className="rounded-full "
            alt="tool image"
          />
        </div>
        <p>{name}</p>
      </div>
      <p className="px-4 pb-4">{desc}</p>
    </div>
  );
};

export const ImageFrame = ({ src, width, height, layout }) => {
  return (
    <div className="rounded-2xl shadow-2xl ">
      <Image
        src={src}
        width={width}
        height={height}
        layout={layout}
        className="rounded-2xl"
        alt="image"
      />
    </div>
  );
};

export const SectionFrame = ({ src, layout, title, desc, imageRight }) => {
  return (
    <div 
    className={`flex flex-col items-center md:flex-row bg-gray-100 rounded-xl md:p-16 md:my-8 ${
        imageRight
          ? " "
          : "md:flex-row-reverse"
      }`}
    >
      <div 
      className={`md:w-1/2 flex flex-col justify-center ${
        imageRight
          ? "md:pr-16  "
          : " md:ml-8 md:pr-8"
      }`}
      >
        <h3 className="text-lg text-gray-600 md:mt-4 tracking-wider font-bold">{title}</h3>
        <p className="text-md text-gray-500 md:mt-2 ">{desc}</p>
      </div>
      <div className="rounded-2xl shadow-xl w-full md:w-1/2  ">
        <Image
          src={src}
          width={16}
          height={9}
          layout={"responsive"}
          className="rounded-2xl  object-cover "
          alt="image"
        />
      </div>
    </div>
  );
};
