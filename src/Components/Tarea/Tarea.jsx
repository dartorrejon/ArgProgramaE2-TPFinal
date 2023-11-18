import { SpinnerIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Input, InputGroup, InputRightElement, Link } from '@chakra-ui/react';
import React from 'react'

const Tarea = ({tarea}) => {
    console.log(tarea);
  return (
    <Flex flexDirection="row">
         <InputGroup width="100%">
        <Input
          type="text"
          placeholder={tarea}
          readOnly={true}
          fontWeight='medium'
          borderRadius="0" 
          height="45px"
        />
        <InputRightElement w='60px'>
          <Link >
          <DeleteIcon boxSize='20px' mr='2px' color='grey'/>
          <SpinnerIcon boxSize='20px' ml='2px'  color='grey' />
          </Link>
       </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default Tarea