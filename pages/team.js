import React from "react";
import NextLink from "next/link";
import { getAllFilesMetadata } from "../utils/mdx";
import { MemberFrame, ToolFrame } from "../components/frames";

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
      <MemberFrame src="/team/David_montufo.jpg" name="Telmo Beroiz Bilbao" role="Putita"/>
      <ToolFrame src="/contents/tools/drive.png" name="Google Drive" role="Artist" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo. consectetur adipiscing elit."></ToolFrame>
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
