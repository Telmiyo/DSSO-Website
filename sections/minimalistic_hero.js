import React from "react";

export default function MinimalisticHero() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <div className="p-5 backdrop-blur-md mt-12 bg-dune-bluefremen/30 w-fit rounded-lg text-center">
        <h1 className="font-fonseca text-6xl   text-center text-dune-white">
          DUNE:
        </h1>
        <h2 className="font-fonseca text-6xl   text-center text-dune-white">
          SPECIAL SPICE OPS
        </h2>
        <a
          download="file"
          // href={require("")}
          className="border-none outline-none mt-4 inline-block py-4 px-5 bg-dune-orangespicy hover:bg-dune-lightorange active:bg-dune-darkorange text-center cursor-pointer no-underline rounded-md text-dune-white font-bold text-lg"
        >
          Download Now
        </a>
      </div>

    </div>
  );
}
