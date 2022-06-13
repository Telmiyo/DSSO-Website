import React from "react";
import Spline from "@splinetool/react-spline";
export default function GameCharacter({
  title,
  description,
  bgcolor,
  inverted,
}) {
  return (
    <div
      className={` ${bgcolor} flex ${
        inverted ? "flex-row-reverse text-dune-black" : "text-white "
      }  items-center justify-around `}
    >
      <div className="w-1/2 px-20 bg-red-500">
        <h3 className="text-4xl">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="w-1/2 h-96 bg-red-700">
        <Spline scene="https://prod.spline.design/7JBlxcEnQSnlSOSY/scene.splinecode" />
      </div>
    </div>
  );
}
