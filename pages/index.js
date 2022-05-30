import {
  Box,
  Container,
  Heading,
  Button,
  Stack,
  Text,
  ButtonGroup
} from "@chakra-ui/react"

const Page = () => {


  return (
    <Container >

      <Box align="center">
        Hello to HomePage!
      </Box>
      <Box w="100px" h="100px" bg="red" position="fixed" top="180">

      </Box>
      <Heading align="center" as="h1">Theme Style View</Heading>
      <Heading as="h2" align="center" py={10} textColor={"secondary"}>Colors</Heading>
      <Stack >
        <Button bg="primary"> Primary Color</Button>
        <Button bg="secondary"> Secondary Color</Button>
        <Button bg="highlight"> Highlight Color</Button>
        <Button bg="warning"> Warning Color</Button>
        <Button bg="danger"> Danger Color</Button>
      </Stack>

      <Heading as="h2" align="center" py={10} textColor={"secondary"}>Headline</Heading>
      <Stack align="center">
      <Heading  variant="h1">HEADLINE LARGE</Heading>
      <Heading variant="h2">HEADLINE MEDIUM</Heading>
      <Heading variant="h3">HEADLINE SMALL</Heading>

      </Stack>

      <Heading as="h2" align="center" py={10} textColor={"secondary"}>Title</Heading>
      <Stack align="center">
      <Text variant="t1">Title Large</Text>
      <Text variant="t2">Title Medium</Text>
      <Text variant="t3">Title Small</Text>
      </Stack>
    </Container>

  )
}

export default Page
