import React from "react";


const Card = (props) => {
  return (
    <div className="relative w-full h-full  grayscale-[150] brightness-50 hover:brightness-100  hover:grayscale-0 transition-all ease-in delay-50 duration-200 hover:scale-[1.025] hover:shadow-xl">
      <img
          src={props.path}
          alt={props.title}
          width={props.width}
          height={props.height}
          className="object-cover w-full h-full invert  hover:invert-0 transition-all ease-in delay-100 duration-200"/>

    </div>
  );
};

export default Card;