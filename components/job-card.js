import React from "react";
import Image from "next/image"
export default function JobCard({ link, img, title, subtitle, desc }) {
  return (
    <div className="my-8">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="no-underline flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex items-center">
            <Image className=" object-contain h-32 w-48 " src={img} alt="job image" />
            <div className="flex flex-col ml-5">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <h6 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {subtitle}
              </h6>
            </div>
          </div>

          <p className=" font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        </div>
      </a>
    </div>
  );
}
