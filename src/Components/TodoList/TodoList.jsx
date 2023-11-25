import { Box, Flex, Input, InputGroup, InputRightElement, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons';
import Todo from '../Todo/Todo';
import { theme } from '../../assets/Theme/Theme';


const TodoList = ({ todos, handleSetComplete, handleDelTask, filter, setTodos, lista }) => {
  // const [lista, setAuxList] = useState([...todos])
  let auxList = []
  let aux2 = [...todos]

  useEffect(() => {
    const cambioLista = () => {

      if (filter == 'All') {
        console.log(todos);
        // setTodos(todos)
        setTodos(lista)
      }
      if (filter == 'Completed') {
        aux2 = lista;
        setTodos(todos.filter((todo) => todo.state == true));
        // setTodos(auxList)
      }

      if (filter == 'Remaining') {
        aux2 = lista;
        setTodos(todos.filter((todo) => todo.state == false));
        // setTodos(auxList)
      }
    }

    cambioLista()
  }, [filter])

  const { colorMode, toggleColorMode } = useColorMode();
  const bg =
    colorMode === "dark" ? theme.colors.dark.bgTodo : theme.colors.light.colorBoton;
  const color =
    colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;

  return (


    <Box
      h='50vh'
      pb='100px'
      bg={bg}
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
