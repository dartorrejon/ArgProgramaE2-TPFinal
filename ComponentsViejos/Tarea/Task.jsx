import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import React from "react";

const Task = ({ tareas }) => {
  const [flag, setFlag] = useBoolean();
  return (
    <Box>
      <Text>Descripcion de Tarea</Text>
      <Checkbox borderRadius="50px" border="1px solid black" ></Checkbox>
      <Button onClick={setFlag.toggle}>Cambiar Checkbox</Button>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>
        Click me to toggle the boolean value
      </button>
    </Box>
  );
};

export default Task;
