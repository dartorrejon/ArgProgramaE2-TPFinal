import { Box, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { DeleteIcon } from '@chakra-ui/icons';
import { PiCircleLight } from 'react-icons/pi';
import Tarea from '../Tarea/Tarea'
import { IoMdCheckmarkCircle } from 'react-icons/io';

const ListaTarea = ({tasks}) => {
    
  const terminar=(e)=>{
    console.log(e.target.value);  
    // const result =tasks
      // console.log(result);
    }
    return (
      <Flex flexDirection="row">
        {tasks.map(tarea=> 
         <InputGroup width="100%">
        <Input
          type="text"
          id={tarea.id}
          placeholder={tarea.task}
          value={tarea.task}
          readOnly={true}
          fontWeight='medium'
          borderRadius="0" 
          height="50px"
          borderTop="none"
          _focus={{
            borderColor: 'gray.300',
              }}
          
        />
        <InputRightElement w='60px'>
          <Box>
          <DeleteIcon boxSize='20px' mr='3px' color='grey'/>
          </Box>
          <Box color="blue.400" mr="15px">
          { (!tarea.estado) && <PiCircleLight size="28px" strokeWidth={5} onClick={terminar}/> }
          {(tarea.estado) &&<IoMdCheckmarkCircle size="30px" mb="2px" strokeWidth={2} />}
          </Box>
          
       </InputRightElement>
      </InputGroup>
      )}
    </Flex>
    // <Flex minH='70vh' flexDirection='column'>
    //     {tasks.map(task=><Tarea key={task.id} tarea={task.task} estado={task.estado} ></Tarea>)}
        
    // </Flex>
  )
}

export default ListaTarea
