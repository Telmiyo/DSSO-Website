import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import PageLayout from "../components/layouts/page-layout";
import { getAllFilesMetadata } from "../utils/mdx";
import Link from "next/link";
//We are getting the teammembers given by the get static props function below
export default function Team({ teammembers }) {
  return (
    <PageLayout title="team">
      <Container>
        <Heading>This is a heading</Heading>
        <h1>this is a h1</h1>
        <a href="https://www.google.com">This is a link</a>
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
          {/* mapping the teammembers array and defining a component that will be apply to each element */}
          {teammembers.map(teammember => (
            <GridItem>
              <Link key={teammember.slug} href={`/${teammember.slug}`}>
                <a>
                  <Box
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    padding="50px"
                  >
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      textAlign="center"
                    >
                      {teammember.name}
                    </Box>
                    <Box
                      mt="1"
                      lineHeight="tight"
                      noOfLines={1}
                      textAlign="center"
                    >
                      {teammember.role}
                    </Box>
                  </Box>
                </a>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </PageLayout>
  );
}
/**
 * GetStaticProps() is a function that fetches data at build time.
 * @returns An array of objects.
 */
export async function getStaticProps() {
  const teammembers = await getAllFilesMetadata(); //getting the metadata from all mdx files
  console.log(teammembers);
  return {
    props: { teammembers }
  };
}
