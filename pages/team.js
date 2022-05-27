import { Box, Container, Grid, GridItem, LinkBox } from "@chakra-ui/react";
import PageLayout from "../components/layouts/page-layout";
import { getAllFilesMetadata } from "../utils/mdx";
import NextLink from "next/link"


import { Member } from "../components/member";

export default function Team({ teammembers }) {
  return (
    <PageLayout title="team">
      <Container>
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
          {teammembers.map(teammember => (
            <GridItem>
              <NextLink key={teammember.slug} href={`/${teammember.slug}`}>
                <LinkBox cursor="pointer">
                <Member
                  name={teammember.name}
                  role={teammember.role}
                  src={teammember.src}
                />
                </LinkBox>
              </NextLink>
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
