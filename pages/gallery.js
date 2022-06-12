import React from "react";
import Link from "next/link";
import Card from "../components/card";
import PageLayout from "../layouts/page-layout";
export default function Gallery() {
  return (
    <PageLayout className={"bg-gray-200 blur-10"}>
      <div className=" md:mx-36 md:my-5 grid grid-cols-1 gap-y-6 md:grid-cols-3 md:grid-rows-4 md:gap-6">
        <a
          className="md:row-span-2 md:col-span-1 "
          id="modal-test"
          href="/contents/gallery/1.png"
          target="_blank"
        >
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/1.png"
            width="300"
            height="600"
          />
        </a>

        <a
          className=" md:row-span-1 md:col-span-2"
          href="/contents/gallery/2.png"
          target="_blank"
        >
          <Link href="/contents/gallery/2.png" target>
            <a>
              <Card
                title="Insomnia"
                subtitle="Design and Development"
                path="/contents/gallery/2.png"
                width="600"
                height="300"
              />
            </a>
          </Link>
        </a>
        <a
          className="md:row-span-1 md:col-span-1"
          href="/contents/gallery/3.png"
          target="_blank"
        >
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/3.png"
            width="300"
            height="300"
          />
        </a>
        <a
          className="md:row-span-2 md:col-span-1"
          href="/contents/gallery/4.png"
          target="_blank"
        >
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/4.png"
            width="300"
            height="600"
          />
        </a>
        <a
          className="md:row-span-2 md:col-span-2"
          href="/contents/gallery/5.png"
          target="_blank"
        >
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/5.png"
            width="600"
            height="600"
          />
        </a>
        <a
          className="md:row-span-1 md:col-span-1"
          href="/contents/gallery/6.png"
          target="_blank"
        >
          <Card
            title="Influence"
            subtitle="Design and Development"
            path="/contents/gallery/6.png"
            width="300"
            height="300"
          />
        </a>
      </div>
    </PageLayout>
  );
}
