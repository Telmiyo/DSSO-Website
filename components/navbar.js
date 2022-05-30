import NextLink from "next/link"
import {
    Box,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    Link,
    Image,
    Flex
} from "@chakra-ui/react"
import React, { useState } from "react"

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
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

function HandleNavbarIcon(bool) {

    bool ? bool = false : bool = true
}

const Navbar = () => {
    const [isMenuActive, SetMenuActive] = useState(true)

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
                <LinkItem href="/">
                    <Image src="/logo.png" align="center" w="50px" h="50px"></Image>
                </LinkItem>
            </Box>
            <Menu flexGrow={1} id="navbar-menu">
                <MenuButton
                    as={IconButton}
                    icon={isMenuActive ? <HamburgerIcon /> : <CloseIcon />}
                    variant="ghost"
                    aria-label="Menu"
                    size="lg"
                    onClick={() => { isMenuActive ? SetMenuActive(false) : SetMenuActive(true) }}
                />

                <MenuList justifyContent={"center"} width="50vw" height={"90vh"} onClick={() => { isMenuActive ? SetMenuActive(false) : SetMenuActive(true) }}>
                    <NextLink href="/" passHref>
                        <MenuItem justifyContent={"center"} align="center" as={Link}>Home</MenuItem>
                    </NextLink>
                    <NextLink href="/game" passHref>
                        <MenuItem justifyContent={"center"} as={Link}>Game</MenuItem>
                    </NextLink>
                    <NextLink href="/team" passHref>
                        <MenuItem justifyContent={"center"} as={Link}>Team</MenuItem>
                    </NextLink>
                    <NextLink href="/engine" passHref>
                        <MenuItem justifyContent={"center"} as={Link}>Engine</MenuItem>
                    </NextLink>
                    <NextLink href="/production" passHref>
                        <MenuItem justifyContent={"center"} as={Link}>Production</MenuItem>
                    </NextLink>
                    <NextLink href="/gallery" passHref>
                        <MenuItem justifyContent={"center"} as={Link}>Gallery</MenuItem>
                    </NextLink>
                    <NextLink href="/postmortem" passHref>
                        <MenuItem justifyContent={"center"} as={Link}>Post Mortem</MenuItem>
                    </NextLink>
                    <MenuItem
                        justifyContent={"center"}
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