import {
    Heading,
    Avatar,
    Box,
    Text,
    Button,
    Badge,
    Link,
    LinkBox
} from '@chakra-ui/react';


export const Member = ({ name, role, src }) => (
    <Box
        w="full"
        minHeight="320px"
        maxW="320px"
        bg="white"
        boxShadow='2xl'
        rounded='lg'
        p={6}
        textAlign='center'
        display='flex'
        flexDirection='column'
        alignItems='center'
    >
        <Box flexGrow={1}>
            <Avatar
                size='xl'
                src={src}
                alt={name}
                mb={4}
                pos='relative'

            />
            <Heading as="h3" color="black" fontSize='2xl' fontFamily='body'>
                {name}
            </Heading>
            {/* <Text fontWeight={600} color="gray.500" mb={4}>
				{username}
			</Text> */}
            <Badge
                px={2}
                py={1}
                bg="gray.100"
                fontWeight="400"
                textColor="black"
            >
                {role}
            </Badge>
        </Box>
        <Button
            variant="outline"
            fontSize="xl"
            colorScheme="orange"
            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px -5px rgb(66 153 225 / 43%)'
            }

        >
            <Link href={"link"} target="_blank"></Link>Follow
        </Button>
    </Box>
)