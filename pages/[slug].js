import { themeMarkdown } from "../lib/theme";
import { Box, 
  Container, 
  Tabs, 
  TabList, 
  Tab, 
  TabPanels,
  TabPanel,
  Avatar,
  Text,
  Heading
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
import PageLayout from "../components/layouts/page-layout";
//the source is the actual content of the mdx file and teh frontmatter is the metadata but we inserted also the slug
export default function TeamMember({ source, frontmatter }) {
  return (
    <PageLayout >
      <Container display="flex" flexDirection="column" alignItems="center" p="20px" alignContent={"center"}>
        <Avatar
                flexGrow={1}
                width={125}
                height={125}
                py={16}
            />
            <Heading>Telmo Beroiz Bilbao</Heading>
            <Text textAlign="center" variant="body2" textColor="grey" pt={8}> I am Telmo, I am 21-year-old motivated to build digital things based on my own creativity. I like to learn by my
own, to look for new ways to get that creativity out but I also like to share my ideas with other people and work
with them in a way of learning and sharing.</Text>

        <Tabs alignItems={"center"}>
          <TabList>
            <Tab>Introduction</Tab>
            <Tab>Background</Tab>
            <Tab>Contribution</Tab>
            <Tab>Projects</Tab>
    
          </TabList>

          <TabPanels>
            <TabPanel>
            <MDXRemote {...source} components={themeMarkdown} lazy />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <MDXRemote {...source} components={themeMarkdown} lazy /> */}
      </Container>
    </PageLayout>
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
