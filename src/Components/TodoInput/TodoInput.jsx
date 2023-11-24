import { Flex, Input, Text,Image, InputGroup, InputRightAddon, useTheme, useColorMode  } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import plus from "/resourse/plus.jpg?url";

import React, { useEffect } from "react";
import { useState } from "react";


const TodoInput = ({addTodo,onHabilitarBusqueda,inputValue}) => {
  
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
      // console.log(tarea);
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
  const handlehabilitarBusqueda=(e)=>{
    onHabilitarBusqueda(e.target.value);
  }
  
  const { colorMode } = useColorMode();
  const theme = useTheme();




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
          onBlur={handlehabilitarBusqueda}
          value={tarea}
          onKeyDown={addTask}
          bg={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}
          color={colorMode === 'dark' ? 'white' : 'gray.800'}
        />
        <InputRightAddon 
        h="50px" 
        bg={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}
        borderRadius="0px">
          <Flex alignItems="center" 
          bg={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}>
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
              color={colorMode === 'dark' ? 'white' : 'gray.800'}
              bg={colorMode === 'dark' ? theme.colors.dark.bg : theme.colors.light.bg}
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
