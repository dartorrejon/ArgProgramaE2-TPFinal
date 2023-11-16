import React from "react";
import { Box, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import logo from "/resourse/faire.png?url";
import {Search2Icon} from '@chakra-ui/icons'
const Header = () => {
  return (
    <Heading as="nav"  display='flex' mt='5px' justifyContent="space-between">

      <Box></Box>
      <Image src={logo} width="110px"/>
      <Search2Icon  boxSize="25px" color='grey' mt="5px"/>

     </Heading>
  );
};

export default Header;
