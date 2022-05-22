import NextLink from 'next/link'
import {
	Box,
	Heading,
	Text,
	Container,
	Button
} from '@chakra-ui/react'



const NotFound = () => {
	return (
			<Container pt={"40vh"} align="center" maxW="container.md" h="90vh">
				<Heading textAlign="center" textColor="blac" as="h1"> ¿Te has perdido?</Heading>
				<Text textAlign={'center'} textDecoration='underline' textColor='black' as="h2">La página que buscas no se encuentra disponible</Text>

				<Box py={12} align="center">
					<NextLink href="/">
						<Button colorScheme="red">Volver al Inicio</Button>
					</NextLink>
				</Box>

			</Container>
	)
}

export default NotFound
