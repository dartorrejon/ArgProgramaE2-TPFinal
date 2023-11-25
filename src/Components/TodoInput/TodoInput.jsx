import { Flex, Input, Text, InputGroup, InputRightAddon, useTheme, useColorMode } from "@chakra-ui/react";
import { FaCirclePlus } from "react-icons/fa6"

import React from "react";
import { useState } from "react";


const TodoInput = ({ addTodo, onHabilitarBusqueda }) => {

  const [tarea, setTarea] = useState('');

  function cargarTarea(e) {
    setTarea(e.target.value)
  }
  const addTask = (e) => {

    if (e.key.toLowerCase() == 'enter') {
      if (tarea == '') {
        return
      }
      addTodo(tarea);
      setTarea('');
    }
  }

  //Esta funcion creo que deberia ir por el icono de  BUSQUEDA.
  const addTaskClick = (e) => {
    e.preventDefault()
    if (tarea == '') {
      return
    }
    addTodo(tarea);
    setTarea('');
  }



  const handlehabilitarBusqueda = (e) => {
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
      <Flex
        flexDirection="row"
        w={{ md: '60%' }}
        mx={{ md: '20%' }}
        mb={{ md: '15px' }}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
      >
        <InputGroup width="100%">
          <Input
            type="text"
            placeholder="Add a task"
            borderRadius="2px"

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
