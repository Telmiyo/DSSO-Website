import Link from "next/link";
import { Box, Button, IconButton, Image, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <Box zIndex="auto">
      <Flex bg="white">
        <Flex bg="white" w="100vw" justifyContent="space-between" py="2">
          <IconButton
            visibility="hidden"
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={display == "none" ? <HamburgerIcon /> : <CloseIcon />}
          />
          <Box>
            <Link href="/">
              <Image
                cursor="pointer"
                src="/logo.png"
                align="center"
                w="50px"
                h="50px"
              ></Image>
            </Link>
          </Box>

          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={display == "none" ? <HamburgerIcon /> : <CloseIcon />}
            onClick={() => changeDisplay(display == "none" ? "flex" : "none")}
          />
        </Flex>
      </Flex>
      <Flex
        display={display}
        flexDir="column"
        align="center"
        justifyContent="center"
        bg="white"
        w="50vw"
        h="100vh"
        pos="fixed"
        right="0"
      >
        <Link href="/">
          <Button variant="ghost" aria-label="Home" color="black">
            Home
          </Button>
        </Link>
        <Link href="/game">
          <Button variant="ghost" aria-label="Home" color="black">
            Game
          </Button>
        </Link>
        <Link href="/team">
          <Button variant="ghost" aria-label="Home" color="black">
            Team
          </Button>
        </Link>
        <Link href="/engine">
          <Button variant="ghost" aria-label="Home" color="black">
            Engine
          </Button>
        </Link>
        <Link href="/production">
          <Button variant="ghost" aria-label="Home" color="black">
            Production
          </Button>
        </Link>
        <Link href="/gallery">
          <Button variant="ghost" aria-label="Home" color="black">
            Gallery
          </Button>
        </Link>
        <Link href="/postmortem">
          <Button variant="ghost" aria-label="Home" color="black">
            Postmortem
          </Button>
        </Link>
        <Link href="https://github.com/Chamfer-Studios/Dune-Special-Spice-Ops">
          <Button variant="ghost" aria-label="Home" color="black">
            View Source{" "}
            <Box ml="2">
              <IoLogoGithub />
            </Box>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
