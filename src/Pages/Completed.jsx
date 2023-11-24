import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Todo from '../Components/Todo/Todo';


const Completed = ({ todos }) => {

    const completos = todos.filter(todo => todo.state === true);
    return (
        <Box pb='80px'>
            {completos.map(todo => {
                return (
                    <Todo key={todo.id} tarea={todo} />
                )
            })}
        </Box>
    )
}

export default Completed
