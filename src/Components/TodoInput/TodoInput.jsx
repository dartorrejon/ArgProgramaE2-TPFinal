import { Flex, Input, Text,Image, InputGroup, InputRightAddon} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import plus from "/resourse/plus.jpg?url";

import React, { useEffect } from "react";
import { useState } from "react";


const TodoInput = ({addTodo}) => {
  
  // const [listaT,setListaT]=useState([])

  // function addTask() {
  //   let nuevaTarea = { id: listaT.length+1, task: tarea,estado:false };
  //   // tasks.push(nuevaTarea)
   
  //   // nuevoTask.map((t) => console.log(t));
  //   // console.log(tasks);
  //   setListaT(Tasks=>[...Tasks,nuevaTarea]);
  //   setTarea('')
    
  // }

  const [tarea,setTarea]=useState('');

  function cargarTarea(e){
      setTarea(e.target.value)
  }
  const addTask=(e)=>{
    
    if(e.key.toLowerCase()=='enter'){
      addTodo(tarea);
      setTarea('');
      console.log(tarea);
    }
  }
  const addTaskClick=(e)=>{
       
      addTodo(tarea);
      setTarea('');
      console.log(tarea);
   
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
          value={tarea}
          onKeyDown={addTask}
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
              onClick={addTask}
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
