import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import Todo from "../Todo/Todo";
// import { PiCircleLight } from 'react-icons/pi';

// import { IoMdCheckmarkCircle } from 'react-icons/io';

const TodoList = ({ todos, handleSetComplete, handleDelTask }) => {
  return (
    <Box>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            tarea={todo}
            handleSetComplete={handleSetComplete}
            handleDelTask={handleDelTask}
          />
        );
      })}
    </Box>
  );
};

export default TodoList;
