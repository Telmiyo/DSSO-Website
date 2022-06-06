import React from "react";
import Image from "next/image";
import Lottie from "react-lottie";
export default function ModuleCard({
  lottieClassName,
  img,
  title,
  description,
  lottieData,
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <div className=" relative">
        <img class="rounded-3xl" src={img} alt="" />

        <div className="flex justify-center items-center w-28 h-28 rounded-3xl bg-dune-ultralightblue absolute -bottom-11 left-1/2 -translate-x-1/2">
          <div className={`w-52 ${lottieClassName}`}>
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-3">
        <p className="text-3xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
