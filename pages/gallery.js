import React from "react";
import Link from "next/link"
import Card from "../components/card"

export default function Gallery() {
  return (
    
       <div className=" md:m-36 grid grid-cols-1 gap-y-6 md:grid-cols-3 md:grid-rows-4 md:gap-6">
        <div className="md:row-span-2 md:col-span-1 ">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/images/module_animation.png"
            width="300"
            height="600"
          />
        </div>
        <div className="bg-gray-500 md:row-span-1 md:col-span-2">
         <Link href="/project">
           <a>
          <Card
            title="Insomnia"
            subtitle="Design and Development"
            path="/contents/images/module_animation.png"
            width="600"
            height="300"
          />
          </a>
          </Link>
        </div>
        <div className=" bg-gray-500 md:row-span-1 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/images/module_animation.png"
            width="300"
            height="300"
          />
        </div>
        <div className="bg-gray-500 md:row-span-2 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/images/module_animation.png"
            width="300"
            height="600"
          />
        </div>
        <div className="bg-gray-500 md:row-span-2 md:col-span-2">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/images/module_animation.png"
            width="600"
            height="600"
          />
        </div>
        <div className=" bg-gray-500 md:row-span-1 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/images/module_animation.png"
            width="300"
            height="300"
          />
        </div>
      </div>
  );
}
