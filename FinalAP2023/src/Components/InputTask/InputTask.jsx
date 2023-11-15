import { Box, Button, Flex, Input, Text,Icon, Image} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import plus from '/resourse/plus.jpg?url'
import {tasks}  from '../../script'
import React from 'react'
import { useState } from 'react'


const InputTask = () => {
  // const [arrayDeObjetos, setArrayDeObjetos] = useState(tasks);

  function addTask(){
    // console.log(tasks[0]);
    // tasks={'id':5, 'task':'Juego fubol'}
     const nuevoObjeto = {'id':5, 'task':'Juego fubol'}
    const nuevoTask=[...tasks,nuevoObjeto];
    
    nuevoTask.map(t=>console.log(t))
  } 


  return (
    <Flex flexDirection='row' >
        <Input type='text'placeholder='Add a task'/>
        <Image src={plus} h='25px' w='25px' alignSelf='center' ml='5px'/>
        <Button onClick={addTask}  bg='none'><AddIcon boxSize={5}  p='5px' bg='blue.400' color='white' borderRadius='30px'></AddIcon></Button>
    </Flex>
  )
}

export default InputTask