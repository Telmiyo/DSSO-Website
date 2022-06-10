import React, { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { getAllFilesMetadata } from "../utils/mdx";
import { MemberFrame, ToolFrame } from "../components/frames";
import { Tabs } from "flowbite-react";
import PageLayout from "../layouts/page-layout";

import {
  IoPeopleOutline,
  IoNewspaperOutline,
  IoCode,
  IoBrush,
} from "react-icons/io5";

export default function Team({ teammembers }) {
  const [activeRol, setActiveRole] = useState("Artist")
  return (
    <PageLayout className="items-center">
      <Image
        src="/contents/corporative/ch_banner.png"
        width={350}
        height={150}
      />
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10
      </p>

      {/* Team Section */}
      <div className="flex flex-row pr-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-dune-orangespicy font-bold">
            There will be an icon here
          </p>
          <h2 className="text-4xl text-dune-lightblue font-semibold">
            PROGRAMMING TEAM
          </h2>
          <p className="mr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique magna sit amet purus.
          </p>
        </div>
        <Image
          className="rounded-2xl"
          src="/contents/images/prog_team.jpeg"
          width={930}
          height={725}
        />
      </div>
      <div className="flex flex-row pr-8">
        <Image
          className="rounded-2xl"
          src="/contents/images/design_team.jpeg"
          width={930}
          height={725}
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-right text-dune-orangespicy font-bold">
            There will be an icon here
          </p>
          <h2 className="text-4xl text-right text-dune-lightblue font-semibold">
            Design Team
          </h2>
          <p className="ml-20 text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique magna sit amet purus.
          </p>
        </div>
      </div>
      <div className="flex flex-row pr-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-dune-orangespicy font-bold">
            There will be an icon here
          </p>
          <h2 className="text-4xl text-dune-lightblue font-semibold">
            ART TEAM
          </h2>
          <p className="mr-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique magna sit amet purus.
          </p>
        </div>
        <Image
          className="rounded-2xl"
          src="/contents/images/art_team.jpeg"
          width={930}
          height={725}
        />
      </div>
      

      {/* Member Grid */}
    
        <Tabs.Group aria-label="Default tabs" style="underline">
            <Tabs.Item active={true} icon={IoPeopleOutline}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                {teammembers
                  .filter((teammember) =>
                    teammember.role.includes("Programmer")
                  )
                  .map((filteredmember) => (
                    <NextLink
                      key={filteredmember.slug}
                      href={`/${filteredmember.slug}`}
                      passHref
                    >
                      <a>
                        <MemberFrame
                          id={"Programmer"}
                          src={`/team/${filteredmember.slug}.png`}
                          name={filteredmember.name}
                          role={filteredmember.role}
                        />
                      </a>
                    </NextLink>
                  ))}
              </div>
            </Tabs.Item>
            <Tabs.Item icon={IoCode}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                {teammembers
                  .filter((teammember) => teammember.role.includes("Designer"))
                  .map((filteredmember) => (
                    <NextLink
                      key={filteredmember.slug}
                      href={`/${filteredmember.slug}`}
                      passHref
                    >
                      <a>
                        <MemberFrame
                          id={"Designer"}
                          src={`/team/${filteredmember.slug}.png`}
                          name={filteredmember.name}
                          role={filteredmember.role}
                        />
                      </a>
                    </NextLink>
                  ))}
              </div>
            </Tabs.Item>
            <Tabs.Item icon={IoNewspaperOutline}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                {teammembers
                  .filter((teammember) => teammember.role.includes("Artist"))
                  .map((filteredmember) => (
                    <NextLink
                      key={filteredmember.slug}
                      href={`/${filteredmember.slug}`}
                      passHref
                    >
                      <a>
                        <MemberFrame
                          id={"Artist"}
                          src={`/team/${filteredmember.slug}.png`}
                          name={filteredmember.name}
                          role={filteredmember.role}
                        />
                      </a>
                    </NextLink>
                  ))}
              </div>
            </Tabs.Item>
            <Tabs.Item icon={IoBrush}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                {teammembers
                  .filter((teammember) => teammember.role.includes("Artist"))
                  .map((filteredmember) => (
                    <NextLink
                      key={filteredmember.slug}
                      href={`/${filteredmember.slug}`}
                      passHref
                    >
                      <a>
                        <MemberFrame
                          id={"Artist"}
                          src={`/team/${filteredmember.slug}.png`}
                          name={filteredmember.name}
                          role={filteredmember.role}
                        />
                      </a>
                    </NextLink>
                  ))}
              </div>
              
            </Tabs.Item>
        </Tabs.Group>

    </PageLayout>
  );
}

export async function getStaticProps() {
  const teammembers = await getAllFilesMetadata();
  console.log(teammembers);
  return {
    props: { teammembers },
  };
}
