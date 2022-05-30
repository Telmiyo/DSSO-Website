import {
    Heading,
    Avatar,
    Box,
    IconButton,
    Text,
    Flex,
    VStack,
    HStack
} from '@chakra-ui/react';

import { SocialIcon } from 'react-social-icons';

const SetRoleColor = (_role) => {

    switch (_role) {

        case "Programmer":
            return "#EB8A8A"
        case "Desginer":
            return "#639DE5"
        case "Artist":
            return "#52C1AF"
        case "Lead Programmer":
            return "#DE3C3C"
        case "Lead Desginer":
            return "#3C85DE"
        case "Lead Artist":
            return "#27B29B"
        case "Producer":
            return "#663CDE"
    }

    return "grey"

}
export const Member = ({ name, role, src, github, linkdn }) => (
    <Flex
        flexDirection='column'
        justifyContent="center"
        alignItems='center'
        py={26}
        gap={16}
        bg="white"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        w={237}
        h={331}
        rounded={16}
        textAlign='center'

    >
        <VStack spacing="16px" >
            <Avatar
                flexGrow={1}
                width={125}
                height={125}
                src={src}
                alt={name}
            // mb={4}
            // pos='relative'

            />
            <Box maxW="151px" flexGrow={1}>
                <Text variant="t2" color="black">
                    {name}
                </Text>
            </Box>
            <Box
                maxW={151}
                flexGrow={1}
                px={2}
                rounded={14}
                bg={SetRoleColor(role)}
                py={1}>
                <Text
                    variant="body1"
                    color="white"
                >
                    {role}
                </Text>
            </Box>
            {/* <Box flexGrow={1}>
        </Box> */}
        <HStack>
            {/* <IconButton href="" icon={<IoLogoGithub/>}/> */}
            <SocialIcon url={github} target="_blank" />
            <SocialIcon url={linkdn} target="_blank" />
            </HStack>
        </VStack>
    </Flex>
)