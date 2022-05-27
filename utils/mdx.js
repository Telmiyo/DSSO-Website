import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import stringWidth from 'string-width'
import remarkToc from "remark-toc";

//gray-matter is a package that reads mdx files and separates the metadata from the content
//next-mdx-remote is a package to interpret markdown on nextjs

//get the root of our project
const root = process.cwd();

//util functin to get the files on our data folder (the one containing the .mdx files)
export const getFiles = () => fs.readdirSync(path.join(root, "data"));

// This function reads the .mdx based on the slug, separates the metadata from the content and serializes it
export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {mdxOptions:{remarkPlugins:[[remarkGfm,{stringLength: stringWidth}],[remarkToc,{}]]}});
  return {
    source,
    frontmatter: {
      slug,
      ...data
    }
  };
};

//Reading all files on the data folder and extracting the metadata
export const getAllFilesMetadata = () => {
    const files = getFiles()

    return files.reduce((allPosts,postSlug)=>{
        const mdxSource = fs.readFileSync(path.join(root,"data",postSlug),"utf-8")
        const { data } = matter(mdxSource)
        return [{...data,slug:postSlug.replace('.mdx','')},...allPosts]
    },[])

};
