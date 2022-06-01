import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
import Image from "next/image";
//the source is the actual content of the mdx file and teh frontmatter is the metadata but we inserted also the slug
export default function TeamMember({ source, frontmatter }) {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src={`/team/${frontmatter.slug}.png`}
          width={200}
          height={200}
          objectFit="cover"
          className="rounded-full"
        ></Image>
      </div>
      <div className="flex justify-center items-center">
        <div className="prose">{<MDXRemote {...source} lazy />}</div>
      </div>
    </div>
  );
}
/**
 * It takes a slug as a parameter, and returns the source and frontmatter of the file with that slug
 * @returns The props object is being returned.
 */
export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: { source, frontmatter },
  };
}
/**
 * GetStaticPaths() is a function that returns an object with a paths property and a fallback property.
 * The paths property is an array of objects, each object having a params property. The params property
 * is an object with a slug property. The slug property is a string. The fallback property is a boolean
 * @returns An object with two properties:
 */
export async function getStaticPaths() {
  const members = await getFiles();
  const paths = members.map((member) => ({
    params: {
      slug: member.replace(/\.mdx/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
