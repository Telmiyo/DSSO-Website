import React from "react";
import Image from "next/image";
import Youtube, { YouTubeProps } from "react-youtube";

export default function Game() {
  const youtubeOpts = {
    height: "390",
    width: "640",
    playerVars: {
      // autoplay: 1,
    },
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center justify-center space-y-3">
        <Image
          src="/contents/corporative/dune_logo.png"
          width={533}
          height={72}
        />
        <h4 className="text-md text-dune-orangespicy font-semibold">
          {" "}
          Lorem Ipsum{" "}
        </h4>
        <p className="w-1/2 text-center mb-10">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>

      <Youtube videoId="vW-PHNZ-Xww" opts={youtubeOpts} className="mt-5" />
    </div>
  );
}
