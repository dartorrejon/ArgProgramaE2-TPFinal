import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { PiCircleLight } from "react-icons/pi";

const Todo = ({tarea}) => {
    const [estado,setEstado]=useState(false)
    const cambiarEstado=()=>{
        estado?setEstado(false):setEstado(true);
        // tarea.estado?tarea.estado=false:tarea.estado=true;
        
    }
    const eliminarElemento=(id)=>{
       
        console.log(typeof(tarea));
       console.log(tarea.indexOf(id));
       
    }

  return (
    <Flex flexDirection="row">
      <InputGroup width="100%">
        <Input
          type="text"
        //   placeholder= {tarea.task}
          readOnly={true}
          fontWeight="medium"
          borderRadius="0"
          height="50px"
          borderTop="none"
          value={tarea.task}
          textDecor={estado?'line-through':'none'}
          _focus={{
            borderColor: "gray.300",
          }}
        />
        <InputRightElement w="60px">
          <Box>
            <DeleteIcon boxSize="20px" mr="3px" color="grey" onClick={()=>eliminarElemento(tarea.id)}/>
          </Box>
          <Box color="blue.400" mr="15px">
            {!estado ? <PiCircleLight size="28px" strokeWidth={5} onClick={cambiarEstado} />:
                estado &&<IoMdCheckmarkCircle size="28px" strokeWidth={5} onClick={cambiarEstado} />}
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Todo;
