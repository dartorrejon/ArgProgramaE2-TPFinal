import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputRightElement,useColorMode, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiCircleLight } from "react-icons/pi";

const Todo = ({tarea, handleSetComplete, handleDelTask}) => {
  

  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const bg =
  colorMode === "dark" ? theme.colors.dark.bgTodo : theme.colors.light.bgHF;
  const color =
  colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;
  const btn =
  colorMode === "dark" ? theme.colors.dark.colorBoton : theme.colors.light.color;



  return (

    <Flex flexDirection="row" minH="100%">
      <InputGroup width="100%">
        <Input
          type="text"
          readOnly={true}
          fontWeight="medium"
          borderRadius="0"
          height="50px"
          borderTop="none"
          value={tarea.task}
          bg={bg}
          color={color}
          textDecor={tarea.state?'line-through':'none'}
          _focus={{
            borderColor: "gray.300",
          }}
        />
        <InputRightElement w="60px" display="flex" mt="5px">
          <Box display="flex" alignItems="center">
            <DeleteIcon boxSize="20px" mr="3px" color="grey" alignItems="center" onClick={()=>handleDelTask(tarea.id)}/>
          </Box>
          <Box mr="15px">
            {!tarea.state ? <PiCircleLight size="28px" color="#4299E1" align="center" strokeWidth={5} onClick={()=>handleSetComplete(tarea.id)} />:
                tarea.state &&<IoMdCheckmarkCircle size="28px" color={btn} strokeWidth={5} onClick={()=>handleSetComplete(tarea.id)} />}
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Todo;