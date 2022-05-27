import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import PageLayout from "../components/layouts/page-layout";
import { getAllFilesMetadata } from "../utils/mdx";
import Link from "next/link";
export default function Team({ teammembers }) {
  return (
    <PageLayout title="team">
      <Container>
        <Heading>This is a heading</Heading>
        <h1>this is a h1</h1>
        <a href="https://www.google.com">This is a link</a>
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
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
export async function getStaticProps() {
  const teammembers = await getAllFilesMetadata();
  console.log(teammembers);
  return {
    props: { teammembers }
  };
}
