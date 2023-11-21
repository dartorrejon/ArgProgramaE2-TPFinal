import { Flex, Input, Text,Image, InputGroup, InputRightAddon} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import plus from "/resourse/plus.jpg?url";
import { tasks } from "../../script";
import React from "react";
import { useState } from "react";

const InputTask = () => {
  function addTask() {
    const nuevaTarea = { id: 65, task: "Juego fubol" };
    const nuevoTask = [...tasks, nuevaTarea];
    nuevoTask.map((t) => console.log(t));
  }

  return (
    <Flex flexDirection="row">
      <InputGroup width="100%">
        <Input
          type="text"
          placeholder="Add a task"
          borderRadius="0"
          height="50px"
        />
        <InputRightAddon h="50px" bg="white" borderRadius="0px">
          <Flex alignItems="center" bg="white">
            <Image
              onClick={addTask}
              src={plus}
              h="25px"
              w="25px"
              alignSelf="center"
              mr="2"
            />
            <Text
              onClick={addTask}
              color="gray"
              fontWeight="semibold"
              fontSize="18px"
              cursor="pointer"
              borderRadius="0"
              p="0 5px" 
            >
              ADD
            </Text>
          </Flex>
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
};

export default InputTask;
