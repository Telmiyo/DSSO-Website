import React from "react";
import Image from "next/image";
import FeatureBox from "../components/feature-box";
import resourceManagerData from "../public/icons/resource_manager.json";
import customLayoutsData from "../public/icons/custom_layouts.json";
import skyboxData from "../public/icons/skybox.json";
import navigateData from "../public/icons/navigate.json";
export default function Engine() {
  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center justify-center space-y-3">
        <h1 className="text-4xl text-dune-orangespicy font-semibold">
          Ko-Fi Engine
        </h1>
        <p className="w-1/2 text-center">
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
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center md:space-x-28  ">
        <FeatureBox
          width={270}
          height={160}
          lottieData={customLayoutsData}
          title="Custom Layouts"
          body="Our engine features a custom layout which you can adapt to your needs as well as save it and use it when you see fit."
        />
        <FeatureBox
          width={204.8}
          height={160}
          lottieData={resourceManagerData}
          title="Resource Manager"
          body="Ko-Fi is optimized with a resource manager that handles all the assets on memory so you can work fast and smooth."
        />
        <FeatureBox
          width={204.8}
          height={160}
          lottieData={skyboxData}
          title="SkyBox"
          body="A beautiful skybox will wrap your scene providing ambience to your level designs."
        />
        <FeatureBox
          width={204.8}
          height={160}
          lottieData={navigateData}
          title="NavMesh"
          body="You can add a navmesh to create your own AIs."
        />
      </div>
      <div className="h-52"></div>
    </div>
  );
}
