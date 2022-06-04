import React from "react";
import Image from "next/image";
export default function Engine() {
  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center justify-center space-y-3">
        <h1 className="text-4xl text-dune-orangespicy font-semibold">Ko-Fi Engine</h1>
        <p className="w-1/2 text-center mb-10">
          Ko-Fi Engine is a videogame engine develop to create Dune Special
          Spice Ops. It's development started 3 months earlier and has been
          improving in parallel to the development of the game.
        </p>
        <Image
          src="/contents/images/engine_isometric.png"
          
          width={700}
          height={546.478}
          quality={100}
        />
      </div>
    </div>
  );
}
