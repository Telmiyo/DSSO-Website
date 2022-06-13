import React, { useState } from "react";

import Image from "next/image";
import { getAllFilesMetadata } from "../utils/mdx";
import { ImageFrame, MemberFrame, ToolFrame } from "../components/frames";
import { Tabs } from "flowbite-react";
import PageLayout from "../layouts/page-layout";
import Spline from "@splinetool/react-spline";

import {
  IoPeopleOutline,
  IoLaptopOutline,
  IoCodeOutline,
  IoBrushOutline,
} from "react-icons/io5";

export default function Team({ teammembers }) {
  const [activeRol, setActiveRol] = useState("Producer");

  const prod = ["Producer", "Lead Programmer"];
  return (
    <PageLayout className="items-center">
      <Image
        src="/contents/corporative/ch_banner.png"
        width={11023 / 20}
        height={4267 / 20}
        alt="chamfer studios"
      />
      <p>
      Chamfer Studios is a group of 25 hardworking and eager to learn university students, who 
      came together to build our game Dune: Special Spice Ops. Studying in the Polytechnic University 
      of Catalonia (UPC), and currently in our third year of the bachelor’s degree in Video Game 
      Design and Development, we came to a common goal, for the subject Project III, to simulate 
      a small studio and develop with our own engine an RTT video game.
      </p>

      <div className="grid grid-cols-3 gap-8 my-8 grayscale">
        <Image
          src="/contents/images/art_team.jpeg"
          width={2048}
          height={1536}
          alt="programming team"
          className="rounded-2xl "
        />
        <Image
          src="/contents/images/prog_team.jpeg"
          width={2048}
          height={1536}
          alt="programming team"
          className="rounded-2xl"
        />
        <Image
          className="rounded-2xl"
          src="/contents/images/design_team.jpeg"
          width={2048}
          height={1536}
          alt="art team"
        />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10
        </p>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-start-1 col-end-3">
          <Image
            src="/contents/images/admin_team.jpeg"
            width={2048}
            height={1536}
            alt="Production team"
            objectFit="cover"
            className="rounded-2xl "
          />
        </div>
        <div className="col-start-4 col-end-6">
          <Image
            src="/contents/images/art_team.jpeg"
            width={2048}
            height={1536}
            alt="programming team"
            className="rounded-2xl "
          />
        </div>
        <div className="col-start-1 col-end-3">
          <Image
            src="/contents/images/prog_team.jpeg"
            width={2048}
            height={1536}
            alt="programming team"
            className="rounded-2xl"
          />
        </div>
        <div className="col-start-4 col-end-6">
          <Image
            className="rounded-2xl"
            src="/contents/images/design_team.jpeg"
            width={2048}
            height={1536}
            alt="art team"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-row-reverse  w-full">
        <div className="w-1/2 flex flex-col justify-center text-right items-end ">
          <h2 className="text-4xl mb-4">DIRECTION TEAM</h2>

          <p className="">
          We present you our direction team, led by Paula Hitz as the Producer, and 
          with María Calle as Lead Designer, Álex Ávila as Lead Programmer, and Guillem Álava as Lead Artist.
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl mb-4">PROGRAMMING TEAM</h2>

          <p className="">
          Introducing our programming team, formed by Irene Hernández, Tomás Carreras, David Montufo, 
          Oscar Cuatrecasas, Yeray Tarifa, Sergi Colomer, Telmo Beroiz, Albert Espinosa, Bosco Barber, 
          Andrés Sánchez, and Álex Ávila, as their lead.
          </p>
        </div>

        <div className="w-1/2">
          <Spline
            scene="https://prod.spline.design/zDflupuR9UBSjJ7v/scene.splinecode"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-row-reverse  w-full">
        <div className="w-1/2 flex flex-col justify-center text-right items-end ">
          <h2 className="text-4xl mb-4">DESIGN TEAM</h2>
          <p className="">
          Introducing the design team, we have Aram Galarza, Aitor Álvarez, Eduard Minguell, Núria Lamonja, 
          Abraham Díaz, Arnau Lucena, Marc Gallardo, and María Calle, as their lead.
          </p>
        </div>

        <div className="w-10/12">
          <Spline scene="https://prod.spline.design/KB65y6t5NMv2Jwju/scene.splinecode" />
        </div>
      </div>

      <div className="flex flex-row  w-full ">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl mb-4 ">ART TEAM</h2>
          <p className="">
            And last but not least, we have our art team, Martí Davicino, 
            Víctor Jara, Carles López, Martí Buxeda, and Guillem Álava as their lead.
          </p>
        </div>

        <div className="w-10/12">
          <Spline scene="https://prod.spline.design/Mog8KZJUaTLtZo9y/scene.splinecode"/>
        </div>
      </div>
      {/* <div className="flex flex-row my-16">
        <div className="flex flex-col justify-center mr-48">
          <p className="text-sm text-dune-orangespicy font-bold">
           <IoCode size={32} className="size-8"/>
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
          src="/contents/images/prog_team.jpeg"
          width={2048}
          height={1536}
          alt="programming team"
          className="rounded-2xl"
          
        />
      </div>
      <div className="flex flex-row my-16">
        <Image
          className="rounded-2xl"
          src="/contents/images/design_team.jpeg"
          width={2048}
          height={1536}
          alt="a saber"
        />
        <div className="flex flex-col justify-center mr-48 items-end">
          <p className="text-sm text-right text-dune-orangespicy font-bold ">
            <IoNewspaperOutline size={32} className=""/>
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
           <IoBrushOutline size={32} /> 
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
          width={2048}
          height={1536}
          alt="art team"
        />
      </div> */}

      {/* Member Grid */}
      <div className="flex w-full">
        <button
          onClick={() => setActiveRol("Producer")}
          className={`w-full flex justify-center ${
            activeRol === "Producer"
              ? " border-b-2 border-roles-producer"
              : "text-gray-500"
          }`}
        >
          <IoPeopleOutline size={30} className="place-self-center" />
        </button>

        <button
          onClick={() => setActiveRol("Programmer")}
          className={`w-full flex justify-center ${
            activeRol === "Programmer"
              ? " border-b-2 border-roles-programmer"
              : "text-gray-500"
          }`}
        >
          <IoCodeOutline size={30} />
        </button>
        <button
          onClick={() => setActiveRol("Designer")}
          className={`w-full flex justify-center ${
            activeRol === "Designer"
              ? " border-b-2 border-roles-designer"
              : "text-gray-500"
          }`}
        >
          <IoLaptopOutline size={30} />
        </button>
        <button
          onClick={() => setActiveRol("Artist")}
          className={`w-full flex justify-center ${
            activeRol === "Artist"
              ? " border-b-2 border-roles-artist"
              : "text-gray-500"
          }`}
        >
          <IoBrushOutline size={30} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center my-16">
        {teammembers
          .filter((teammember) => teammember.role.includes(activeRol))
          .map((filteredmember) => (
            <MemberFrame
              id={"Programmer"}
              src={`/team/${filteredmember.slug}.png`}
              name={filteredmember.name}
              role={filteredmember.role}
              github={filteredmember.github}
              linkdn={filteredmember.linkedin}
              href={`/${filteredmember.slug}`}
            />
          ))}
      </div>
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
