import PageLayout from "../layouts/page-layout";
import GameFeatures from "../sections/game-features";
import GameCharacter from "../sections/game-characters";
import Hero from "../sections/hero";
import MinimalisticHero from "../sections/minimalistic_hero";
import GameSection from "../sections/game_section";
export default function Home() {
  return (
    <div className="container-none flex flex-col h-screen ">
      <div className=" w-full flex h-screen justify-center items-center">
        {/* <Hero /> */}
        <MinimalisticHero />
      </div>
      <div className="fixed top-0 left-0 h-full w-full -z-10">
        <video
          loop
          autoPlay
          muted
          className="w-full h-full object-fill"
          height="100%"
          width="100%"
        >
          <source
            src="/contents/videos/dsso_trailer.mp4"
            type="video/mp4"
            height="100%"
            width="100%"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <GameFeatures />
      </div>
      <div>
        <GameSection />
      </div>
      <div className="bg-dune-black py-10">
        <h3 className="text-4xl font-semibold text-center text-white">Meet your characters</h3>
        <GameCharacter
          title="Zhib"
          description="The Naib of the sietch, a fearless fighter who erned the respect of his people from a very young age.
        With his impeccable knife aim he can kill a man from far away, but he is even more dangerous up close, since he can slash through multiple enemies, ending their lives at once."
          bgcolor={"bg-dune-black"}
        />
        <GameCharacter
          title="Nerala"
          description="A trained Bene Gesserit that rejected their order and got punished for it, losing her vocal cords in the process.
        She is a ferocious hunter who can blind and deafen a man with her poisons, and kill from very far away with her precious gadgets."
          bgcolor={"bg-dune-white"}
          inverted={true}
        />
        <GameCharacter
          title="Omozra"
          description="Outcasted since he was a kid and adopted and experimented with by a worm trainer, he outlived his master and became, himself, the greatest worm trainer of all.
        Sadiq, his best trained worm, follows him everywhere, emerging from the sand to execute whoever Omozra orders and transporting and healing his allies."
          bgcolor={"bg-dune-black"}
        />
      </div>
    </div>
  );
}
