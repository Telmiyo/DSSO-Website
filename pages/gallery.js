import React from "react";
import Link from "next/link";
import Card from "../components/card";
import PageLayout from "../layouts/page-layout";
export default function Gallery() {
  return (
    <PageLayout>
      <div className=" md:mx-36 md:my-5 grid grid-cols-1 gap-y-6 md:grid-cols-3 md:grid-rows-4 md:gap-6">
        <div className="md:row-span-2 md:col-span-1 ">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/1.png"
            width="300"
            height="600"
          />
        </div>

        <div className=" md:row-span-1 md:col-span-2">
          <div>
            <Card
              title="Insomnia"
              subtitle="Design and Development"
              path="/contents/gallery/2.png"
              width="600"
              height="300"
            />
          </div>
        </div>
        <div className="md:row-span-1 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/3.png"
            width="300"
            height="300"
          />
        </div>
        <div className="md:row-span-2 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/4.png"
            width="300"
            height="600"
          />
        </div>
        <div className="md:row-span-2 md:col-span-2">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/5.png"
            width="600"
            height="600"
          />
        </div>
        <div className="md:row-span-1 md:col-span-1">
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/6.png"
            width="300"
            height="300"
          />
        </div>
      </div>
    </PageLayout>
  );
}
