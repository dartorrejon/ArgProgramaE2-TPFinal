import { Flex, Input, Text,Image, InputGroup, InputRightAddon, useTheme, useColorMode  } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import plus from "/resourse/plus.jpg?url";
import { FaCirclePlus } from "react-icons/fa6"

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
  
  
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const bg =
  colorMode === "dark" ? theme.colors.dark.bgTodo : theme.colors.light.bgTodo;
  const color =
  colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;



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
          bg={bg}
          color={color}
          _focus={{
            borderColor: "gray.300",
            boxShadow: "none",
          }}
          
        />
        <InputRightAddon 
        h="50px" 
        bg={bg}
        borderRadius="0px">
          <Flex align="center" 
          bg={bg}>
            <FaCirclePlus 
              color="#4299E1"
              onClick={addTaskClick}
              size="22px"
              align="center"
              cursor="pointer"
            />
            <Text
              onClick={addTaskClick}
              color={color}
              bg={bg}
              fontWeight="normal"
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
