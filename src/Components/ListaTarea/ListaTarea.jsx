import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Tarea from '../Tarea/Tarea'
import { tasks } from '../../script'

const ListaTarea = () => {
    
    return (
    <Flex minH='70vh' boxShadow="lg" transition="box-shadow 0.3s ease-in-out" flexDirection='column'>
        {tasks.map(task=><Tarea key={task.id} tarea={task.task} ></Tarea>)}
        
    </Flex>
  )
}

export default ListaTarea
