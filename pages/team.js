import React, { useState } from "react";

import Image from "next/image";
import { getAllFilesMetadata } from "../utils/mdx";
import { MemberFrame } from "../components/frames";
import PageLayout from "../layouts/page-layout";

import {
  IoPeopleOutline,
  IoLaptopOutline,
  IoCodeOutline,
  IoBrushOutline,
  IoDesktopOutline,
} from "react-icons/io5";

export default function Team({ teammembers }) {
  const prod = ["Producer", "Lead Programmer", "Lead Designer", "Lead Artist"];
  const prog = ["Lead Programmer", "Programmer"];
  const des = ["Lead Designer", "Designer"];
  const art = ["Lead Artist", "Artist"];
  const [activeRol, setActiveRol] = useState(prod);

  return (
    <PageLayout className="items-center space-y-8">
      <div>
        <Image
          src="/contents/corporative/ch_banner.png"
          width={11023 / 20}
          height={4267 / 20}
          alt="chamfer studios"
        />
      </div>
      <p className="text-center">
        Chamfer Studios is a group of 25 hardworking and eager to learn
        university students, who came together to build our game Dune: Special
        Spice Ops. Studying in the Polytechnic University of Catalonia (UPC),
        and currently in our third year of the bachelor’s degree in Video Game
        Design and Development, we came to a common goal, for the subject
        Project III, to simulate a small studio and develop with our own engine
        an RTT video game.
      </p>

      {/* Team Section */}
      <div className="grid grid-cols-1 gap-y-24">
        <div className="flex flex-col space-y-8 md:flex-row-reverse justify-center items-center text-center md:text-left">
          <div className="flex flex-col md:w-1/2 space-y-4 md:pl-16 md:pt-16 items-center md:items-start">
            <IoPeopleOutline size={50} className="text-roles-producer " />
            <h3 className="text-2xl md:text-6xl font-semibold">
              DIRECTION TEAM
            </h3>
            <p className="text-lg">
              We present you our direction team, led by Paula Hitz as the
              Producer, and with María Calle as Lead Designer, Álex Ávila as
              Lead Programmer, and Guillem Álava as Lead Artist.
            </p>

            <a
              className=" border-none outline-none inline-block py-2 w-1/2 md:w-1/4  bg-purple-400 hover:bg-purple-200 active:bg-purple-600 text-center cursor-pointer no-underline rounded-md text-black font-semibold text-lg"
              href="#member-grid"
              onClick={() => setActiveRol(prod)}
            >
              Meet Us
            </a>
          </div>
          <div className="w-full md:w-1/2  p-4">
            <Image
              src="/contents/images/admin_team.jpeg"
              width={2048}
              height={1536}
              alt="chamfer-studios-admin-team"
              className="object-cover rounded-xl "
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col md:w-1/2 space-y-4 md:pl-16 md:pt-16 items-center md:items-start text-center md:text-left">
            <IoCodeOutline size={50} className="text-roles-programmer" />
            <h3 className="text-2xl md:text-6xl font-semibold">
              PROGRAMMING TEAM
            </h3>
            <p className="text-lg pr-8">
              Introducing our programming team, formed by Irene Hernández, Tomás
              Carreras, David Montufo, Oscar Cuatrecasas, Yeray Tarifa, Sergi
              Colomer, Telmo Beroiz, Albert Espinosa, Bosco Barber, Andrés
              Sánchez, and Álex Ávila, as their lead.
            </p>

            <a
              // href={require("")}
              className=" border-none outline-none inline-block py-2 w-1/2 md:w-1/4 bg-roles-programmer hover:bg-red-200 active:bg-red-500 text-center cursor-pointer no-underline rounded-md text-black font-semibold text-lg"
              href="#member-grid"
              onClick={() => setActiveRol(prog)}
            >
              Meet Us
            </a>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/contents/images/prog_team.jpeg"
              width={2048}
              height={1536}
              alt="chamfer-studios-admin-team"
              className="object-cover  rounded-xl"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-8 md:flex-row-reverse justify-center items-center text-center md:text-left">
          <div className="flex flex-col md:w-1/2 space-y-4 md:pl-16 md:pt-16 items-center md:items-start">
            <IoDesktopOutline size={50} className="text-roles-designer " />
            <h3 className="text-2xl md:text-6xl font-semibold">DESIGN TEAM</h3>
            <p className="text-lg">
              Introducing the design team, we have Aram Galarza, Aitor Álvarez,
              Eduard Minguell, Núria Lamonja, Abraham Díaz, Arnau Lucena, Marc
              Gallardo, and María Calle, as their lead.
            </p>

            <a
              // href={require("")}
              className=" border-none outline-none inline-block py-2 w-1/2 md:w-1/4  bg-blue-400 hover:bg-blue-200 active:bg-roles-leaddesigner text-center cursor-pointer no-underline rounded-md text-black font-semibold text-lg"
              href="#member-grid"
              onClick={() => setActiveRol(des)}
            >
              Meet Us
            </a>
          </div>
          <div className="w-full md:w-1/2  p-4">
            <Image
              src="/contents/images/design_team.jpeg"
              width={2048}
              height={1536}
              alt="chamfer-studios-admin-team"
              className="object-cover rounded-xl "
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex flex-col md:w-1/2 space-y-4 md:pl-16 md:pt-16 items-center md:items-start text-center md:text-left">
            <IoBrushOutline size={50} className="text-roles-artist" />
            <h3 className="text-2xl md:text-6xl font-semibold">ART TEAM</h3>
            <p className="text-lg pr-8">
              And last but not least, we have our art team, Martí Davicino,
              Víctor Jara, Carles López, Martí Buxeda, and Guillem Álava as
              their lead.
            </p>

            <a
              // href={require("")}
              className=" border-none outline-none inline-block py-2 w-1/2 md:w-1/4 bg-roles-artist hover:bg-green-200 active:bg-roles-leadartist text-center cursor-pointer no-underline rounded-md text-black font-semibold text-lg"
              href="#member-grid"
              onClick={() => setActiveRol(art)}
            >
              Meet Us
            </a>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <Image
              src="/contents/images/art_team.jpeg"
              width={2048}
              height={1536}
              alt="chamfer-studios-admin-team"
              className="object-cover  rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Member Grid */}
      <div className="flex w-full pt-8">
        <button
          onClick={() => setActiveRol(prod)}
          className={`w-full flex justify-center ${
            activeRol === "Producer"
              ? " border-b-2 border-roles-producer"
              : "text-gray-500"
          }`}
        >
          <IoPeopleOutline size={30} className="place-self-center" />
        </button>

        <button
          onClick={() => setActiveRol(prog)}
          className={`w-full flex justify-center ${
            activeRol === "Programmer"
              ? " border-b-2 border-roles-programmer"
              : "text-gray-500"
          }`}
        >
          <IoCodeOutline size={30} />
        </button>
        <button
          onClick={() => setActiveRol(des)}
          className={`w-full flex justify-center ${
            activeRol === "Designer"
              ? " border-b-2 border-roles-designer"
              : "text-gray-500"
          }`}
        >
          <IoLaptopOutline size={30} />
        </button>
        <button
          onClick={() => setActiveRol(art)}
          className={`w-full flex justify-center ${
            activeRol === "Artist"
              ? " border-b-2 border-roles-artist"
              : "text-gray-500"
          }`}
        >
          <IoBrushOutline size={30} />
        </button>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center my-16"
        id="member-grid"
      >
        {teammembers
          .filter((teammember) => activeRol.includes(teammember.role)).sort((a,b)=>
            a.role.includes("Lead")==false
          )
          .map((filteredmember) => (
            <MemberFrame
              key={filteredmember.slug}
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
