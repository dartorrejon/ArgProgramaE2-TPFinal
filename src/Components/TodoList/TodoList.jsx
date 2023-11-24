import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { DeleteIcon } from '@chakra-ui/icons';
import Todo from '../Todo/Todo';


const TodoList = ({todos}) => {
  
    return (
      <Box>
        {todos.map(todo=>{
          return (
            <Todo key={todo.id} tarea={todo}/>
          )
        })}
      </Box>
    //   
  )
}

export default TodoList
