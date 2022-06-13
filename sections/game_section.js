import React from "react";
import Image from "next/image";
import { YouTubeLite } from "react-youtube-lite";

export default function GameSection() {
  return (
    <div className="flex flex-col h-full items-center justify-start space-y-10 bg-gray-200 pb-10 pt-10">
      <div className="flex flex-col items-center space-y-10">
        <h3 className="text-4xl font-semibold font-fonseca">The Game</h3>
        <p className="w-[60%] mb-10">
          Dune: Special Spice Ops is a real time tactics game focused on
          stealth, discovery and strategy, developed by Chamfer Studios. It is
          based on the classic game Commandos, developed by Pyro Studios, a
          stealth-oriented real-time tactics video game from 1998, and with Dune
          theme, one of the world&apos;s best-selling science fiction novels, by
          Frank Herbert, set in a distant future feudal interstellar society.
          <br />
          <br />
          Follow the story of our protagonist, Zhib, and his companions, Nerala
          and Omozra, to discover the threats that live among the people of
          Arrakis. They are ready to fight against all odds, will you be able to
          overcome the challenge?
        </p>
      </div>
      <div className="w-[60%] ">
        <YouTubeLite
          url="https://www.youtube.com/embed/xQKdZvK3yuo?autoplay=1"
          title="Dune SSO Trailer"
          playerParameters={{ autoplay: 1 }}
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
    </div>
  );
}
