import React from "react";
import Spline from "@splinetool/react-spline";
export default function GameCharacter({ title, description, bgcolor }) {
  return (
    <div className={`text-white ${bgcolor} flex  items-center px-12 h-96`}>
      <div className="w-1/2 bg-red-500">
        <h3 className="text-4xl">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="w-1/2 ">
        <Spline scene="https://prod.spline.design/7JBlxcEnQSnlSOSY/scene.splinecode" />
      </div>
    </div>
  );
}
