import React, { useState } from "react";
import { Box, Heading, Image, IconButton, useColorMode, useColorModeValue, extendTheme, useTheme } from "@chakra-ui/react";
import { Search2Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "/resourse/faire.png?url";




  const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
   
    const theme = useTheme();
    const bg = colorMode === "dark" ? theme.colors.dark.bg : theme.colors.light.bg;
    const color = colorMode === "dark" ? "white" : "gray.800";


  return (
<Heading
      as="nav"
      display="flex"
      justifyContent="center"
      minH="8vh"
      alignItems="center"
      bg={bg}
      color={color}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        maxW="800px"
        width="100%"
      >
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          boxSize="27px"
          bg="white"
          color="grey"
          onClick={toggleColorMode}
          mr="100px"
          
          
        />
        <Image src={logo} width="125px" />

        <Search2Icon boxSize="27px" color="grey" ml="100px" />
      </Box>
    </Heading>
  );
};

export default Header;
