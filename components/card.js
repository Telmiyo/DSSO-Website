import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="  w-full h-full opacity-30 hover:opacity-100 hover:brightness-100  hover:grayscale-0 transition-all ease-in delay-50 duration-200 hover:scale-[1.025] hover:shadow-xl">
      <Image
        src={props.path}
        alt={props.title}
        width={props.width}
        height={props.height}
        layout="responsive"
        className="object-cover transition-all ease-in delay-100 duration-200"
      />
    </div>
  );
};

export default Card;
