import { Box, useColorMode, useTheme } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Todo from '../Todo/Todo';



const TodoList = ({ todos, handleSetComplete, handleDelTask, filter, setTodos, lista, setAuxList }) => {


  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const bg =
    colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;

  useEffect(() => {
    const cambioLista = () => {
      if (filter == 'All') {
        setTodos(lista)
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
      h={{ base: 'calc(100vh - 11vh)', md: '70vh' }}
      pb={{ base: '115px', md: '0px' }}
      w={{ md: '60%' }}
      mx={{ md: '20%' }}
      bg={bg}
      overflowY='auto'

      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
      borderRadius='2px'
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
