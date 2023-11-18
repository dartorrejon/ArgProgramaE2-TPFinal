import React from "react";
import { Box, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import logo from "/resourse/faire.png?url";
import {Search2Icon} from '@chakra-ui/icons'
const Header = () => {
  return (
    <Heading as="nav"
     display='flex' 
     justifyContent="space-between"
     minH="6vh"
     alignItems="center"
     >
    

      <Box></Box>

      <Box>
        <Image src={logo} width="110px"/>
        </Box>

      <Box>
        <Search2Icon  boxSize="25px" color='grey' mt="5px" mr="10px" />
        </Box>

     </Heading>
  );
};

export default Header;
