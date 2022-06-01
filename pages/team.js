import React, { useState } from "react";
import NextLink from "next/link";
import { getAllFilesMetadata } from "../utils/mdx";
import { MemberFrame, ToolFrame } from "../components/frames";
import { Tabs } from "flowbite-react";

export default function Team({ teammembers }) {
  return (
    <div>
      <div className="">
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item active={true} title="Programmer">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:px-40 2xl:px-80 gap-4 justify-items-center">
              {teammembers
                .filter((teammember) => teammember.role.includes("Programmer"))
                .map((filteredmember) => (
                  <MemberFrame
                    id={"Programmer"}
                    src={`/team/${filteredmember.slug}.png`}
                    name={filteredmember.name}
                    role={filteredmember.role}
                  />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Designer">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:px-40 2xl:px-80 gap-4 justify-items-center">
              {teammembers
                .filter((teammember) => teammember.role.includes("Designer"))
                .map((filteredmember) => (
                  <MemberFrame
                    id={"Designer"}
                    src={`/team/${filteredmember.slug}.png`}
                    name={filteredmember.name}
                    role={filteredmember.role}
                  />
                ))}
            </div>
          </Tabs.Item>
          <Tabs.Item title="Artist">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:px-40 2xl:px-80 gap-4 justify-items-center">
              {teammembers
                .filter((teammember) => teammember.role.includes("Artist"))
                .map((filteredmember) => (
                  <MemberFrame
                    id={"Artist"}
                    src={`/team/${filteredmember.slug}.png`}
                    name={filteredmember.name}
                    role={filteredmember.role}
                  />
                ))}
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>

      <ToolFrame
        src="/contents/tools/drive.png"
        name="Google Drive"
        role="Artist"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit."
      ></ToolFrame>
    </div>
  );
}

export async function getStaticProps() {
  const teammembers = await getAllFilesMetadata();
  console.log(teammembers);
  return {
    props: { teammembers },
  };
}
