import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Todo from '../Components/Todo/Todo';


const Remaining = ({ todos }) => {

    const completos = todos.filter(todo => todo.state === false);
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

export default Remaining