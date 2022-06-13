import React from "react";

export default function GameFeatures() {
  const features = [
    {
      title: "STRATEGY",
      description: "Challenge your mind to command your troops and win.",
    },
    {
      title: "STORY",
      description:
        "Submerge inside the famous DUNE franchise to enjoy an alternative story about the fremen",
    },
    {
      title: "DISCOVERY",
      description: "Explore and discover two maps in order to win.",
    },
  ];
  return (
    <div className=" flex justify-around bg-dune-orangespicy py-12  text-center">
      {features.map(({ title, description }) => (
        <div className="items-center flex flex-col text-white" key={title}>
          <h3 className="text-3xl font-semibold mb-2">{title}</h3>
          <p className="w-1/2">{description}</p>
        </div>
      ))}
    </div>
  );
}
