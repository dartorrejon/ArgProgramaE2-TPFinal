import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  IconButton,
  useColorMode,
  useColorModeValue,
  extendTheme,
  useTheme,
} from "@chakra-ui/react";
import { Search2Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "/resourse/faire.png?url";
import Filtros from "../Filtros/Filtros";

const Header = ({ onBuscar, getFilter }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const bg =
    colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
  const color =
    colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;
  const lupa =
    colorMode === "dark" ? theme.colors.dark.lupa : theme.colors.light.lupa;
  const colorBoton =
    colorMode === "dark" ? theme.colors.dark.colorBoton : theme.colors.light.colorBoton;

  return (
    <Heading
      as="nav"
      display="flex"
      justifyContent="center"
      minH="50px"
      px='40px'
      w='100%'
      alignItems="center"
      bg={bg}
      color={color}
      pos={{ base: 'initial', md: 'fixed' }}
      top={0}
      left={0}

    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        width="100%"
      >
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          boxSize="27px"
          fontSize={20}
          bg={bg}
          color="grey"
          onClick={toggleColorMode}
        // mr="100px"
        />
        <Box>
          <Image src={logo} width="125px" />
        </Box>

        <Box
          mt="-1px"
          w='500px'
          h='90%'
          fontSize={15}
          display={{ base: 'none', md: 'flex' }}
          color={colorBoton}
          justifyContent="space-around"
          border="0px solid #e2e8f0"
          paddingTop="10px">
          <Filtros getFilter={getFilter} />
        </Box>

        <Box>
          <Search2Icon
            boxSize="27px"
            color={lupa}
            // ml="100px"
            onClick={onBuscar}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </Heading>
  );
};

export default Header;
