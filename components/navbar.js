import NextLink from "next/link"
import {
    Box,
    Stack,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    Link,
    Image,
    Flex
} from "@chakra-ui/react"

import { HamburgerIcon } from "@chakra-ui/icons"
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = 'primary'
    return (
        <NextLink href={href}>
            <Link p={2}
                rounded="lg"
                bg={active ? 'secondary' : undefined}
                color={active ? 'primary' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Flex
            bg="white"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center"
            justifyContent="center"
            h="72px"
            >
            <Box align="center" flexGrow={1} >
                <Image  src="/logo.png" flexAlign="center" w="50px" h="50px"></Image>
            </Box>

            <Menu flexGrow={1}  id="navbar-menu">
                <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    aria-label="Menu"
                    size="lg"
                />
                <MenuList>
                    <NextLink href="/" passHref>
                        <MenuItem as={Link}>Home</MenuItem>
                    </NextLink>
                    <NextLink href="/game" passHref>
                        <MenuItem as={Link}>Game</MenuItem>
                    </NextLink>
                    <NextLink href="/team" passHref>
                        <MenuItem as={Link}>Team</MenuItem>
                    </NextLink>
                    <NextLink href="/engine" passHref>
                        <MenuItem as={Link}>Engine</MenuItem>
                    </NextLink>
                    <NextLink href="/production" passHref>
                        <MenuItem as={Link}>Production</MenuItem>
                    </NextLink>
                    <NextLink href="/gallery" passHref>
                        <MenuItem as={Link}>Gallery</MenuItem>
                    </NextLink>
                    <NextLink href="/postmortem" passHref>
                        <MenuItem as={Link}>Post Mortem</MenuItem>
                    </NextLink>
                    <MenuItem
                        as={Link}
                        href="https://github.com/Chamfer-Studios/Dune-Special-Spice-Ops"
                        target="_blank"
                    >
                       View Source <IoLogoGithub />
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Navbar