import React from "react";
import { Box, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import logo from "/resourse/faire.png?url";
import {Search2Icon} from '@chakra-ui/icons'
const Header = () => {
  return (
    <Heading  display='flex' flexDirection='row' mt='5px' >
      <Image src={logo}  />
      <Search2Icon  boxSize={6} color='blue.400' alignItems='center'/>
      
    </Heading>
  );
};

export default Header;
