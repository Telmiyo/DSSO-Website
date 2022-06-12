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

export const MemberFrame = ({ src, name, role, github, linkdn, href }) => {
  return (
    <div className="rounded-xl shadow-xl w-auto h-auto px-8">
      <div className="flex flex-col justify-around h-100 space-y-4 py-4 items-center">
        <NextLink key={href} href={href} passHref >
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
        <div className={`${SetRoleColor(role)} text-center rounded-xl p-1`}>
          <Image
            src={src}
            width={50}
            height={50}
            objectFit="cover"
            className="rounded-full"
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
    <div className="rounded-2xl shadow-2xl my-8 ">
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
