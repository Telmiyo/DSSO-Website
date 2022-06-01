import React from "react";
import NextLink from "next/link";
import { getAllFilesMetadata } from "../utils/mdx";
export default function Team({ teammembers }) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        {teammembers.map((teammember) => (
          <div>
            <NextLink key={teammember.slug} href={`/${teammember.slug}`}>
              {/*Member Frame*/}
              <div className="bg-red-200 w-20 h-20"></div>
            </NextLink>
          </div>
        ))}
      </div>
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
