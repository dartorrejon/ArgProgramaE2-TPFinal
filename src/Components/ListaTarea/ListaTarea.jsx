import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Tarea from '../Tarea/Tarea'

const ListaTarea = ({tasks}) => {
   
    return (
    <Flex minH='70vh' flexDirection='column'>
        {tasks.map(task=><Tarea key={task.id} tarea={task.task} ></Tarea>)}
        
    </Flex>
  )
}

export default ListaTarea
