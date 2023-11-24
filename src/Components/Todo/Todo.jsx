import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputRightElement,useColorMode, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiCircleLight } from "react-icons/pi";

const Todo = ({tarea, handleSetComplete, handleDelTask}) => {
  


    const { colorMode } = useColorMode();
    const theme = useTheme();



  return (

    <Flex flexDirection="row">
      <InputGroup width="100%">
        <Input
          type="text"
          readOnly={true}
          fontWeight="medium"
          borderRadius="0"
          height="50px"
          borderTop="none"
          value={tarea.task}
          bg={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}
          color={colorMode === 'dark' ? theme.colors.dark.color : theme.colors.light.color}
          textDecor={tarea.state?'line-through':'none'}
          _focus={{
            borderColor: "gray.300",
          }}
        />
        <InputRightElement w="60px">
          <Box>
            <DeleteIcon boxSize="20px" mr="3px" color="grey" onClick={()=>handleDelTask(tarea.id)}/>
          </Box>
          <Box color="blue.400" mr="15px">
            {!tarea.state ? <PiCircleLight size="28px" strokeWidth={5} onClick={()=>handleSetComplete(tarea.id)} />:
                tarea.state &&<IoMdCheckmarkCircle size="28px" strokeWidth={5} onClick={()=>handleSetComplete(tarea.id)} />}
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Todo;