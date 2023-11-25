import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons';
import Todo from '../Todo/Todo';


const TodoList = ({ todos, handleSetComplete, handleDelTask, filter, setTodos, lista, setAuxList }) => {

  useEffect(() => {
    const cambioLista = () => {
      if (filter == 'All') {
        setTodos(lista)
        console.log('all:', lista)
      } else if (filter == 'Completed') {
        let aux2 = [...lista];
        setTodos(lista.filter((todo) => todo.state == true));
        setAuxList(aux2)
      } else if (filter == 'Remaining') {
        let aux2 = [...lista];
        setTodos(lista.filter((todo) => todo.state == false));
        setAuxList(aux2)
      }
    }
    cambioLista()
  }, [filter])

  return (

    <Box

    >
      {todos.map((todo) => {
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
