import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons';
import Todo from '../Todo/Todo';


const TodoList = ({ todos, handleSetComplete, handleDelTask, filter }) => {
  const [lista, setAuxList] = useState([...todos])
  let auxList = [...todos]

  useEffect(() => {
    if (filter == 'All') {
      setAuxList(todos)
    }
    if (filter == 'Completed') {
      auxList = todos.filter((todo) => todo.state == true);
      setAuxList(auxList)
    }

    if (filter == 'Remaining') {
      auxList = todos.filter((todo) => todo.state == false);
      setAuxList(auxList)
    }
  }, [filter])

 

  return (

     
   <Box>
      {lista.map((todo) => {
        return (
          <Todo
            key={todo.id}
            tarea={todo}
            handleSetComplete={handleSetComplete}
            handleDelTask={handleDelTask}
            filter={filter}
          />
        );
      })}
    </Box>


  );
  
};

export default TodoList;
