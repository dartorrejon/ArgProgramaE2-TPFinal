import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Icon,
  Image,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
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
          height="45px"
        />

        <InputRightElement>
          <Link>
          <Image onClick={addTask} src={plus} h="25px" w="25px" alignSelf="center" ml="5px" />
          </Link>
          {/* <Button onClick={addTask} bg="none">
            <AddIcon
              boxSize={5}
              p="5px"
              bg="blue.400"
              color="white"
              borderRadius="30px"
            ></AddIcon>
          </Button> */}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default InputTask;
