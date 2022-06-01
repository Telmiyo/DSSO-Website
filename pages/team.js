import React from "react";
import NextLink from "next/link";
import { getAllFilesMetadata } from "../utils/mdx";
import { MemberFrame, ToolFrame } from "../components/frames";


export default function Team({ teammembers }) {
    const actualRole = "Programmer"
    return (
        <div>
            <div className="">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:px-40 2xl:px-80 gap-4 justify-items-center">
                    {teammembers.filter(teammember => teammember.role.includes(actualRole)).map(filteredmember => (
                        <MemberFrame src={`/team/${filteredmember.slug}.png`} name={filteredmember.name} role={filteredmember.role} />
                    ))}
                    {/* 
                    {teammembers.map((teammember) => (
                        
                        <MemberFrame src={`/team/${teammember.slug}.png`} name={teammember.name} role={teammember.role} />
                        // <NextLink key={teammember.slug} href={`/${teammember.slug}`}>

                        // </NextLink>

                    ))} */}
                </div>
            </div>

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
