import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Todo from '../Components/Todo/Todo';


const Remaining = ({ todos, handleSetComplete, handleDelTask }) => {

    const incompletos = todos.filter(todo => todo.state === false);
    return (
        <Box pb='80px'>
            {incompletos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        tarea={todo}
                        handleSetComplete={handleSetComplete}
                        handleDelTask={handleDelTask}

                    />
                )
            })}
        </Box>
    )
}

export default Remaining