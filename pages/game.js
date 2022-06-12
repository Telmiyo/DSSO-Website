import React from "react";
import Image from "next/image";
import Youtube from "react-youtube";
import PageLayout from "../layouts/page-layout";
import { YouTubeLite } from 'react-youtube-lite';

export default function Game() {
  const youtubeOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // autoplay: 1,
    },
  };
  return (
    <PageLayout className="items-center justify-start space-y-10">
      <div className="flex flex-col items-center space-y-10">
        <Image
          src="/contents/corporative/dune_logo.png"
          width={533}
          height={72}
          alt="dune_logo"
        />

        <p className="w-[60%] text-center mb-10">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
     <div className="pb-[56.25%] relative w-[60%]">
     <YouTubeLite url="vW-PHNZ-Xww" title='Dune SSO Trailer' className="w-full h-full absolute top-0 left-0"/>

     </div>
      {/* <Youtube videoId="vW-PHNZ-Xww" opts={youtubeOpts} className="mt-5 " /> */}
    </PageLayout>
  );
}
