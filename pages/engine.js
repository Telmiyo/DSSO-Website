import React from "react";
import Image from "next/image";
import FeatureBox from "../components/feature-box";
import ModuleCard from "../components/module-card";
import {
  moduleAnimationData,
  modulePhysicsData,
  moduleShaderData,
  moduleUIData,
  moduleParticlesData,
  moduleAudioData,
  moduleCameraData,
  moduleScriptingData,
  resourceManagerData,
  customLayoutsData,
  skyboxData,
  navigateData,
} from "../components/lottie-references";
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
      <div className="grid grid-cols-2 m-10 gap-4">
        <ModuleCard
          img="/contents/images/module_animation.png"
          lottieData={moduleAnimationData}
          title="Animation"
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
        <ModuleCard
          img="/contents/images/module_animation.png"
          lottieData={modulePhysicsData}
          title="Physics"
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
        <ModuleCard
          img="/contents/images/module_animation.png"
          lottieData={moduleShaderData}
          title="Shaders"
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />

        <ModuleCard
          img="/contents/images/module_animation.png"
          title="User Interface"
          lottieClassName="-translate-x-2 translate-y-1.5"
          lottieData={moduleUIData}
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
        <ModuleCard
          img="/contents/images/module_animation.png"
          title="Particles"
          lottieData={moduleParticlesData}
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
        <ModuleCard
          img="/contents/images/module_animation.png"
          lottieData={moduleAudioData}
          title="Audio"
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
        <ModuleCard
          img="/contents/images/module_animation.png"
          lottieData={moduleCameraData}
          title="Camera"
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
        <ModuleCard
          img="/contents/images/module_animation.png"
          lottieData={moduleScriptingData}
          lottieClassName="w-36"
          title="Scripting"
          description="In enim nostrud do duis non aliqua consequat occaecat. Dolor fugiat cupidatat ex commodo consequat consectetur mollit fugiat aliqua nisi qui nostrud. Ea sint sit sunt duis ullamco cillum excepteur. Occaecat Lorem ut Lorem laboris. Sint deserunt adipisicing aliquip est laboris aliquip consequat dolor enim elit sint laborum elit. Ea qui elit labore aute magna Lorem adipisicing ipsum excepteur commodo incididunt duis ea labore."
        />
      </div>
    </div>
  );
}
