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
  const lupaInvertida =
    colorMode === "dark" ? theme.colors.light.lupa : theme.colors.dark.lupa;
  const colorBoton =
    colorMode === "dark" ? theme.colors.dark.colorBoton : theme.colors.light.colorBoton;

  return (
    <Heading
      as="nav"
      display="flex"
      justifyContent="center"
      minH="10vh"
      px='40px'
      w='100%'
      alignItems="center"
      bg={bg}
      color={color}
      mb={{ md: '20px' }}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          boxSize={{ base: "27px", md: "25px", lg: "32px" }}
          fontSize={{ base: "27px", md: "25px", lg: "32px" }}
          bg={bg}
          color={lupa}
          onClick={toggleColorMode}
          style={{ cursor: "pointer" }}
          _hover={{ color: lupaInvertida }}
        />
        <Box>
          <Image src={logo} width="125px" />
        </Box>

        <Box
          mt="-1px"
          w='500px'
          h='90%'
          fontSize={{ base: '15px', md: '15px', lg: '20px' }}
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
            onClick={onBuscar}
            style={{ cursor: "pointer" }}
            _hover={{ color: lupaInvertida }}
          />
        </Box>
      </Box>
    </Heading>
  );
};

export default Header;
