import {
    Heading,
    Avatar,
    Box,
    Button,
    Badge,
    Link,
} from '@chakra-ui/react';

let roleColor = "black"
const pro = "Programmer"
const SetRoleColor = (_role) => (
   _role === "Programmer" ? roleColor = "red.200" : roleColor = "grey" 
   
)

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
                width={125}
                height={125}
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
                bg={SetRoleColor(role)}
                fontWeight="400"
                textColor="black"
            >
                {role}
            </Badge>
        </Box>
    </Box>
)