import { Flex, Input, Text,Image, InputGroup, InputRightAddon} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import plus from "/resourse/plus.jpg?url";

import React, { useEffect } from "react";
import { useState } from "react";


const TodoInput = ({addTodo,habilitarBusqueda={habilitarBusqueda}}) => {
  
  const [tarea,setTarea]=useState('');

  function cargarTarea(e){
      setTarea(e.target.value)
  }
  const addTask=(e)=>{
    
    if(e.key.toLowerCase()=='enter'){
      if(tarea==''){
        console.log("El campo task no puede estar vacio");
        return 
      } 
      addTodo(tarea);
      setTarea('');
      console.log(tarea);
    }
  }
  const addTaskClick=(e)=>{
      if(tarea==''){
        console.log("El campo task no puede estar vacio");
        return 
      } 
      addTodo(tarea);
      setTarea('');
     
  }


  return (
    <>
    <Flex flexDirection="row">
      <InputGroup width="100%">
        <Input
          type="text"
          placeholder="Add a task"
          borderRadius="0"
          height="50px"
          onChange={cargarTarea}
          onBlur={()=>habilitarBusqueda(tarea)}
          value={tarea}
          onKeyDown={ addTask}
        />
        <InputRightAddon h="50px" bg="white" borderRadius="0px">
          <Flex alignItems="center" bg="white">
            <Image
              onClick={addTaskClick}
              
              src={plus}
              h="25px"
              w="25px"
              alignSelf="center"
              mr="2"
            />
            <Text
              onClick={addTaskClick}
              color="gray"
              fontWeight="semibold"
              fontSize="18px"
              cursor="pointer"
              borderRadius="0"
              p="0 5px" 
              >
              ADD
            </Text>
          </Flex>
        </InputRightAddon>
      </InputGroup>
    </Flex>
   
  </>
  );
};

export default TodoInput;
