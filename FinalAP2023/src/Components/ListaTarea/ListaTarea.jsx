import { Flex } from '@chakra-ui/react'
import React from 'react'
import Tarea from '../Tarea/Tarea'
import { tasks } from '../../script'

const ListaTarea = () => {
    
    return (
    <Flex>
        {tasks.map(task=><Tarea key={task.id} tarea={task.task}></Tarea>)}
        
    </Flex>
  )
}

export default ListaTarea
