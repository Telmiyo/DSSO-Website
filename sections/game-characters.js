import React from "react";
import Spline from "@splinetool/react-spline";
export default function GameCharacter({
  title,
  description,
  bgcolor,
  inverted,
  scene,
}) {
  return (
    <div
      className={` ${bgcolor} flex ${
        inverted ? "flex-row-reverse text-dune-black" : "text-white "
      }  items-center justify-around `}
    >
      <div className="flex container items-center">
        <div className="w-1/2  ">
          <h3 className="text-4xl">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="w-1/2 h-96">
          <Spline scene={scene} />
        </div>
      </div>
    </div>
  );
}
