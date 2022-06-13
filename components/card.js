import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="relative w-full h-full grayscale-[150] brightness-50 hover:brightness-100 hover:grayscale-0 transition-all ease-in delay-50 duration-200 hover:scale-[1.025] hover:shadow-xl">
      <a href={props.path} target="_blank" rel="noreferrer noopener">
        <Image
          src={props.path}
          alt={props.title}
          width={props.width}
          height={props.height}
          layout="responsive"
          className="object-cover w-full h-full invert hover:invert-0 transition-all ease-in delay-100 duration-200"
        />
      </a>
    </div>
  );
};

export default Card;
