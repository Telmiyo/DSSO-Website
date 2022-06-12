import React, { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
import Image from "next/image";
import { RiSpotifyLine,RiVimeoLine } from "react-icons/ri";
import { FaArtstation } from "react-icons/fa";
import Link from "next/link";
import MDXComponents from "../components/mdx-components";
import Lottie from "react-lottie";
import {
  githubIconData,
  linkedinIconData,
  twitterIconData,
  youtubeIconData,
} from "../components/lottie-references";
import PageLayout from "../layouts/page-layout";
//the source is the actual content of the mdx file and teh frontmatter is the metadata but we inserted also the slug
export default function TeamMember({
  source,
  descriptionMarkdown,
  frontmatter,
}) {
  const [animateGithub, setAnimateGithub] = useState(true);
  const [animateLinkedin, setAnimateLinkedin] = useState(true);
  const [animateYoutube, setAnimateYoutube] = useState(true);
  const [animateTwitter, setAnimateTwitter] = useState(true);
  const existsYoutube = frontmatter.youtube === undefined;
  const existsTwitter = frontmatter.twitter === undefined;
  const existsSpotify = frontmatter.spotify === undefined;
  const existsArtstation = frontmatter.artstation === undefined;
  const existsVimeo = frontmatter.vimeo === undefined;
  return (
    <PageLayout className="items-center">
      {/* Profile */}
      <div className="flex flex-col items-center justify-center space-y-5 mt-5">
        <Image
          src={`/team/${frontmatter.slug}.png`}
          width={125}
          height={125}
          objectFit="cover"
          className="rounded-full"
        ></Image>
        <h1 className="text-4xl font-semibold">{frontmatter.name}</h1>
        <div className="prose prose-p:text-justify prose-headings:text-dune-bluefremen">
          {
            <MDXRemote
              {...descriptionMarkdown}
              components={MDXComponents}
              lazy
            />
          }
        </div>
        <div className="flex justify-center space-x-5 items-center">
          <Link href={`${frontmatter.github}`}>
            <a
              target="_blank"
              onMouseEnter={() => setAnimateGithub(false)}
              onMouseLeave={() => setAnimateGithub(true)}
            >
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: githubIconData,
                  rendererSettings: {
                    preserveAspectRation: "xMidYMid slice",
                  },
                }}
                width={32}
                isStopped={animateGithub}
              />
            </a>
          </Link>
          <Link href={`${frontmatter.linkedin}`} passHref>
            <a
              target="_blank"
              onMouseEnter={() => setAnimateLinkedin(false)}
              onMouseLeave={() => setAnimateLinkedin(true)}
            >
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: linkedinIconData,
                  rendererSettings: {
                    preserveAspectRation: "xMidYMid slice",
                  },
                }}
                width={32}
                isStopped={animateLinkedin}
              />
            </a>
          </Link>

          <Link href={`${frontmatter.youtube}`} passHref>
            <a
              target="_blank"
              onMouseEnter={() => setAnimateYoutube(false)}
              onMouseLeave={() => setAnimateYoutube(true)}
              className={`${existsYoutube ? "hidden" : "flex"} items-end`}
            >
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: youtubeIconData,
                  rendererSettings: {
                    preserveAspectRation: "xMidYMid slice",
                  },
                }}
                width={32}
                isStopped={animateYoutube}
              />
            </a>
          </Link>

          <Link href={`${frontmatter.twitter}`} passHref>
            <a
              target="_blank"
              onMouseEnter={() => setAnimateTwitter(false)}
              onMouseLeave={() => setAnimateTwitter(true)}
              className={`${existsTwitter ? "hidden" : "flex"}`}
            >
              <Lottie
                options={{
                  loop: false,
                  autoplay: false,
                  animationData: twitterIconData,
                  rendererSettings: {
                    preserveAspectRation: "xMidYMid slice",
                  },
                }}
                width={32}
                isStopped={animateTwitter}
              />
            </a>
          </Link>
          <Link href={`${frontmatter.spotify}`} passHref>
            <a
              target="_blank"
              className={`${existsSpotify ? "hidden" : "flex"}`}
            >
              <RiSpotifyLine size={27} />
            </a>
          </Link>
          <Link href={`${frontmatter.artstation}`} passHref>
            <a
              target="_blank"
              className={`${existsArtstation ? "hidden" : "flex"}`}
            >
              <FaArtstation size={25} />
            </a>
          </Link>
          <Link href={`${frontmatter.vimeo}`} passHref>
            <a
              target="_blank"
              className={`${existsVimeo ? "hidden" : "flex"}`}
            >
              <RiVimeoLine size={25} />
            </a>
          </Link>
        </div>
      </div>

      {/* Markdown */}
      <div className="flex justify-center items-center mt-5">
        <div className="prose  prose-p:text-justify prose-headings:text-dune-bluefremen">
          {<MDXRemote {...source} components={MDXComponents} lazy />}
        </div>
      </div>
    </PageLayout>
  );
}
/**
 * It takes a slug as a parameter, and returns the source and frontmatter of the file with that slug
 * @returns The props object is being returned.
 */
export async function getStaticProps({ params }) {
  const { source, descriptionMarkdown, frontmatter } = await getFileBySlug(
    params.slug
  );
  return {
    props: { source, frontmatter, descriptionMarkdown },
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
