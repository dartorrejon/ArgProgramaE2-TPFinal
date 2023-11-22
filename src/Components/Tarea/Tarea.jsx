import { SpinnerIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Input, InputGroup, InputRightElement, Link } from '@chakra-ui/react';
import React from 'react'
import { PiCircleLight } from "react-icons/pi";


const Tarea = ({tarea}) => {
    
  return (
    <Flex flexDirection="row">
         <InputGroup width="100%">
        <Input
          type="text"
          placeholder={tarea}
          readOnly={true}
          fontWeight='medium'
          borderRadius="0" 
          height="50px"
          borderTop="none"
          _focus={{
            borderColor: 'gray.300',
              }}
          
        />
        <InputRightElement w='60px'>
          <Box>
          <DeleteIcon boxSize='20px' mr='3px' color='grey'/>
          </Box>
          <Box color="blue.400" mr="15px">
          <PiCircleLight size="28px" strokeWidth={5} />
          </Box>
          
       </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default Tarea