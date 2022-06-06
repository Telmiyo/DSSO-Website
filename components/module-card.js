import React from "react";
import Image from "next/image";
import Lottie from "react-lottie"
export default function ModuleCard({img,title, description,lottieData}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center w-1/2 text-center mt-20">
      <div className="w-4/5 h-72  bg-gray-500 relative">
        <Image src={img} layout="fill" />
        <div className="w-28 h-28 rounded-full bg-dune-orangespicy absolute -bottom-11 left-1/2 -translate-x-1/2" >
          <Lottie options={defaultOptions} />
        </div>
      </div>

      <div className="mt-16 space-y-3">
        <p className="text-3xl">{title}</p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
