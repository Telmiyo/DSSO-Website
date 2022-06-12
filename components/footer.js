import React from "react";
import Image from "next/image";
export default function Footer() {
  const current = new Date();
  return (
    <div className="flex flex-row justify-center items-center bg-dune-orangespicy py-5 w-full">
      <p className="text-white">
        ©{current.getFullYear()} Alejandro Ávila and Telmo Beroiz. All rights
        Reserved.
      </p>
    </div>
  );
}
