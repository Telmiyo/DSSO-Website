import { themeMarkdown } from "../lib/theme";
import { Box } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
//the source is the actual content of the mdx file and teh frontmatter is the metadata but we inserted also the slug
export default function TeamMember({ source, frontmatter }) {
  return (
    <Box p="20px">
      <MDXRemote {...source} components={themeMarkdown} lazy />
    </Box>
  );
}
/**
 * It takes a slug as a parameter, and returns the source and frontmatter of the file with that slug
 * @returns The props object is being returned.
 */
export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: { source, frontmatter }
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
  const paths = members.map(member => ({
    params: {
      slug: member.replace(/\.mdx/, "")
    }
  }));
  return {
    paths,
    fallback: false
  };
}
