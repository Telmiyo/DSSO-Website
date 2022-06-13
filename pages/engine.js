import React, { Suspense } from "react";
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

import Spline from "@splinetool/react-spline";
import PageLayout from "../layouts/page-layout";
import { LibraryFrame } from "../components/frames";

export default function Engine() {
  return (
    <PageLayout>
      <div className=" flex flex-col items-center justify-center space-y-3">
        <h1 className="text-4xl text-dune-orangespicy font-semibold font-fonseca">
          Ko-Fi Engine
        </h1>
        <p className="w-1/2 text-center">
          Ko-Fi Engine is a videogame engine develop to create Dune Special
          Spice Ops. It&apos;s development started 3 months earlier and has been
          improving in parallel to the development of the game.
        </p>

        {/* <Image
          src="/contents/images/engine_isometric.png"
          width={700}
          height={546.478}
          quality={100}
        /> */}
      </div>
      <div className="w-full h-[546.478px]">
        <Spline
          scene="https://draft.spline.design/JfJqmu3CSrBnua1k/scene.splinecode"
          className="engineSpline"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between md:my-16">
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
      <div className="grid grid-cols-1 md:grid-cols-2 my-10  gap-14">
        <ModuleCard
          img="/contents/images/engine_animation.gif"
          lottieData={moduleAnimationData}
          title="Animation"
          description="The animation module accepts fbx with animations inside them.
          You can create and delete your custom clips to take just a segment of the animation
           and use the clips in the scripting module.
         "
        />
        <ModuleCard
          img="/contents/images/engine_physics.gif"
          lottieData={modulePhysicsData}
          title="Physics"
          description="The physics module includes components such as rigidbody, sphere, box and capsule colliders and features like raycasting, collision and triggering detection. It is implemented using React Physics 3D, a lightweight library that has everything needed and can be implemented in a really easy way."
        />
        <ModuleCard
          img="/contents/images/engine_shaders.gif"
          lottieData={moduleShaderData}
          title="Shaders"
          description="All the engine is rendered using shaders. There is also a component where you can add your own shaders, customize it with the in-engine text editor and apply the changes at realtime compilation. We accept only glsl shaders along with our custom syntax."
        />

        <ModuleCard
          img="/contents/images/engine_ui.gif"
          title="User Interface"
          lottieClassName="-translate-x-2 translate-y-1.5"
          lottieData={moduleUIData}
          description="The UI module allows the user to add 2D graphic elements to the game. The module features a canvas which performs as a coordinate system for the rest of the objects to be placed. At the moment we support buttons, images and text, but you can create your own custom items such as sliders or checkboxes using the scripting module."
        />
        <ModuleCard
          img="/contents/images/engine_particles.gif"
          title="Particles"
          lottieData={moduleParticlesData}
          description="With our particle system you will be able to create your own custom particles by using alphas and lots of the properties that this module brings to the users."
        />
        <ModuleCard
          img="/contents/images/engine_sound.gif"
          lottieData={moduleAudioData}
          title="Audio"
          description="The engine has an audio module.It has been developed using OpenAl and supports varius of the most used audio extensions (mp3,wav,ogg,etc). You can use the audio source component and the audio switch component"
        />
        <ModuleCard
          img="/contents/images/engine_camera.gif"
          lottieData={moduleCameraData}
          title="Camera"
          description="The engine camera has been optimized a lot to be able to run the engine and any game as smooth as posible. We use the frustum to perform 3 types of culling that can be used individually or together. These are: A sphere culling, a frustum culling and an occlusion culling which is done on the renderer. Every culling filters the objects processed by the next culling on the pipeline to ensure a low processing power usage."
        />
        <ModuleCard
          img="/contents/images/engine_scripting.gif"
          lottieData={moduleScriptingData}
          lottieClassName="w-36"
          title="Scripting"
          description="Ko-Fi engine supports Lua as its scriping language due to its speed, ease of use and popularity. We also support Javascript with basic functionality. With the scriping module you can access any property of the game objects such as its transform, its components and the component properties. You can access some internal features of the engine such as the time or the settings."
        />
      </div>

      <h1 className="text-3xl font-semibold mb-8">Libraries</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center ">
        <LibraryFrame name="Assimp" desc="A library to import and export various 3d-model-formats including scene-post-processing to generate missing render data." />
        <LibraryFrame name="Brofiler" desc="Brofiler is an external profiling tool developed by Vadim Slyusarev. The Author describes the tool as a Super Lightweight C++ Profiler for Games." />
        <LibraryFrame name="Recast and Detour" desc="Detours is a software package for monitoring and instrumenting API calls on Windows. Recast is state of the art navigation mesh construction toolset for games." />
        <LibraryFrame name="DrWav" desc="dr_wav is an open source library for decoding WAV files" />
        <LibraryFrame name="DrWav" desc="dr_wav is an open source library for decoding WAV files" />
        <LibraryFrame name="Glew" desc="The OpenGL Extension Wrangler Library (GLEW) is a cross-platform open-source C/C++ extension loading library." />
        <LibraryFrame name="ImGui" desc="Dear ImGui is a bloat-free graphical user interface library for C++." />
        <LibraryFrame name="ImGuizmo" desc="ImGizmo is a small (.h and .cpp) library built ontop of Dear ImGui that allow you to manipulate(Rotate & translate at the moment) 4x4 float matrices." />
        <LibraryFrame name="JsonParser" desc="An Open Source Json parser for modern c++" />
        <LibraryFrame name="Sol" desc="A fast, simple C++ and Lua Binding" />
        <LibraryFrame name="MathGeolib" desc="A C++ library for linear algebra and geometry manipulation for computer graphics." />
        <LibraryFrame name="OpenAL" desc="OpenAL is a cross-platform 3D audio API appropriate for use with gaming applications and many other types of audio applications." />
        <LibraryFrame name="Optik" desc="Optick is a super-lightweight C++ profiler for Games." />
        <LibraryFrame name="ReactPhysics3D" desc="ReactPhysics3D is a C++ physics engine library that can be used in 3D simulations and games." />
        <LibraryFrame name="SDL" desc="Simple DirectMedia Layer is a cross-platform software development library designed to provide a hardware abstraction layer for computer multimedia hardware components." />
        <LibraryFrame name="STBImage" desc="single-file public domain (or MIT licensed) libraries for C/C++." />
      </div>

    </PageLayout>
  );
}
