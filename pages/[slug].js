import {themeMarkdown} from '../lib/theme'
import {Box} from '@chakra-ui/react'
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
export default function TeamMember({ source, frontmatter }) {

  return <Box p='20px'><MDXRemote {...source} components={themeMarkdown} lazy /></Box>;
}
export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  return {
    props: { source, frontmatter }
  };
}

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
