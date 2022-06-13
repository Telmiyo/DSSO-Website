import Spline from "@splinetool/react-spline";

import React,{useRef} from "react";
const Hero = () => {
  const objectToAnimate = useRef();
  function onLoad(spline){
    console.log("hfjsfhklsf")

    const obj = spline.findObjectByName('Camera');
    objectToAnimate.current = obj;
  }
  function onMouseDown(e) {
    if (e.target.name === 'Cube') {
      console.log('I have been clicked!');
    }
  }
  return (
    <div className="w-full relative">
      <div
        className="text-dune-black text-center absolute top-1/2 left-1/2 
        transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-md p-8 space-y-4"
      >
        <h1 className="text-6xl font-semibold ">Dune: Special Spice Ops</h1>
        <p className="pt-1 text-xl">
          A world succumbed by the tirany of the Harkonnen desperate for someone
          who will deliver the Fremmen. Will you be the one to save them?
        </p>
        <a
          download="file"
          // href={require("")}
          className="border-none outline-none inline-block py-[10px] px-[25px] bg-dune-orangespicy hover:bg-dune-lightorange active:bg-dune-darkorange text-center cursor-pointer no-underline rounded-md text-dune-white font-bold text-lg"
        >
          Download Now
        </a>
      </div>
      <div className="h-full z-0">
        <Spline
          scene="https://prod.spline.design/BaYZhcMXvOtKxU8q/scene.splinecode"
          className="spline"
          onLoad={onLoad}
          onScroll={onMouseDown}
          />
      </div>
    </div>
  );
};

export default Hero;
