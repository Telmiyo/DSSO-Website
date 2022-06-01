import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
//the source is the actual content of the mdx file and teh frontmatter is the metadata but we inserted also the slug
export default function TeamMember({ source, frontmatter }) {
  return (
    <div>
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
        <p className="text-center text-sm w-1/3">{frontmatter.description}</p>
        <div className="flex justify-center space-x-5">
          <Link href={`${frontmatter.github}`}>
            <a>
              <IoLogoGithub size={32} />
            </a>
          </Link>
          <Link href={`${frontmatter.linkedin}`} passHref>
            <a>
              <IoLogoLinkedin size={32} className="text-blue-500" />
            </a>
          </Link>
        </div>
      </div>
      {/* Tabs */}

      <div className="flex justify-center">
        <ul
         className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg  dark:bg-gray-800 dark:text-blue-500"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Dashboard
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Settings
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      {/* Tab Content */}
      

      {/* Markdown */}
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
