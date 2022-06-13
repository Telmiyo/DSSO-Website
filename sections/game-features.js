import React from "react";

export default function GameFeatures() {
  const features = [
    {
      title: "INFINITE",
      description: "Entire galaxies lie waiting to be discovered.",
    },
    {
      title: "STORY",
      description:
        "Experience infinite freedom, or uncover the secrets of the universe with more than 30 hours of story.",
    },
    {
      title: "MULTIPLAYER",
      description:
        "Dogfight, race exocraft, build colonies, explore, trade, fight and survive together.",
    },
    {
      title: "VR",
      description:
        "The entire game playable in virtual reality for a more immersive experience.",
    },
 
  ];
  return (
    <div className=" flex justify-around bg-red-500 w-full h-full py-12 px-12 text-center space-x-4">
      {features.map(({ title, description }) => (
        <div>
          <h3 className="text-3xl">{title}</h3>
          <p className="">{description}</p>
        </div>
      ))}
    </div>
  );
}
