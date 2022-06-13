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
        Dune: Special Spice Ops is a real time tactics game focused on stealth, discovery and exploration, 
        developed by Chamfer Studios. It is based on the classic game Commandos, developed by Pyro Studios, 
        a stealth-oriented real-time tactics video game from 1998, and with Dune theme, one of the world’s 
        best-selling science fiction novels, by Frank Herbert, set in a distant future feudal interstellar society.<br/><br/>

        Follow the story of our protagonist, Zhib, and his companions, Nerala and Omozra, to discover the threats 
        that live among the people of Arrakis. They are ready to fight against all odds, will you be able to overcome the challenge?
        </p>
      </div>
     <div className="pb-[56.25%] relative w-[60%]">
     <YouTubeLite url="xQKdZvK3yuo" title='Dune SSO Trailer' className="w-full h-full absolute top-0 left-0"/>

     </div>
      {/* <Youtube videoId="vW-PHNZ-Xww" opts={youtubeOpts} className="mt-5 " /> */}
    </PageLayout>
  );
}
