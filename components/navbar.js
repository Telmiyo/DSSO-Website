import NextLink from "next/link"
import {
    Box,
    Stack,
    Link,
} from "@chakra-ui/react"

//import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor ='gray200'
    return (
        <NextLink href={href}>
            <Link p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box bg="blackAlpha.200" py={8}>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <LinkItem href="/">
                    HOME
                </LinkItem >
                <LinkItem href="/game" path={path}>
                    GAME
                </LinkItem>
                <LinkItem href="/team" path={path}>
                    TEAM
                </LinkItem>
                <LinkItem href="/engine" path={path}>
                    ENGINE
                </LinkItem>
                <LinkItem href="/production" path={path}>
                    PRODUCTION
                </LinkItem>
                <LinkItem href="/gallery" path={path}>
                    GALLERY
                </LinkItem>
                <LinkItem href="/postmortem" path={path}>
                    POST MORTEM
                </LinkItem>
            </Stack>
        </Box>
    )
}

export default Navbar