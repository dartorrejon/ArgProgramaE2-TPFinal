import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiCircleLight } from "react-icons/pi";

const Todo = ({ tarea, handleSetComplete, handleDelTask, habilitarBusqueda }) => {


  return (
    <Flex flexDirection="row">
      <InputGroup width="100%">
        <Input
          type="text"
          //   placeholder= {tarea.task}
          readOnly={true}
          fontWeight="medium"
          borderRadius="0"
          height="50px"
          borderTop="none"
          value={tarea.task}
          textDecor={tarea.state ? 'line-through' : 'none'}
          onBlur={() => habilitarBusqueda(tarea.task)}
          _focus={{
            borderColor: "gray.300",
          }}
        />
        <InputRightElement w="60px">
          <Box>
            <DeleteIcon boxSize="20px" mr="3px" color="grey" onClick={() => handleDelTask(tarea.id)} />
          </Box>
          <Box color="blue.400" mr="15px">
            {!tarea.state ? <PiCircleLight size="28px" strokeWidth={5} onClick={() => handleSetComplete(tarea.id)} /> :
              tarea.state && <IoMdCheckmarkCircle size="28px" strokeWidth={5} onClick={() => handleSetComplete(tarea.id)} />}
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Todo;