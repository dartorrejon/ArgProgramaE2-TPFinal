import { Flex, Input, Text,Image, InputGroup, InputRightAddon} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import plus from "/resourse/plus.jpg?url";

import React, { useEffect } from "react";
import { useState } from "react";

import ListaTarea from "../ListaTarea/ListaTarea";

const InputTask = ({tasks}) => {
  
  const [listaT,setListaT]=useState([...tasks])

  function addTask() {
    let nuevaTarea = { id: listaT.length+1, task: tarea };
    // tasks.push(nuevaTarea)
   
    // nuevoTask.map((t) => console.log(t));
    // console.log(tasks);
    setListaT(Tasks=>[...Tasks,nuevaTarea]);
    setTarea('')
    
  }
 useEffect(()=>{
    const previos=()=>{
       setListaT(tasks);
    }
    previos()
 },[])

  const [tarea,setTarea]=useState('')
  function cargarTarea(e){
      setTarea(e.target.value)
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
        />
        <InputRightAddon h="50px" bg="white" borderRadius="0px">
          <Flex alignItems="center" bg="white">
            <Image
              onClick={addTask}
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
     <ListaTarea tasks={listaT}/>
  </>
  );
};

export default InputTask;
