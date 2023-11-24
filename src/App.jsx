import { useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import Todo from "./Components/Todo/Todo";
import TodoFilters from "./Components/Filtro/TodoFilters";
import Footer from "./Components/Footer/Footer";
import Rutas from "./Rutas";
import Completed from "./Pages/Completed";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Hacer la comida", state: false },
    { id: 2, task: "Programar trabajo final", state: true },
    { id: 3, task: "Hacer los cuestionarios", state: false },
    { id: 4, task: "Terminar trabajo 7", state: true }
  ]);

  const addTodo = (task) => {
    const ultimaTarea = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTask = {
      id: ultimaTarea + 1,
      task: task,
      state: false
    }
    const todoList = [...todos];
    todoList.push(newTask);
    setTodos(todoList)
  }

  return (
    <Box w="100%" h="100vh" bg="gray.50" pt="50px" display="flex">
      <Container
        pos='relative'
        width="500px"
        bg="white"
        padding="0"

        borderRadius="2px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
        transition="box-shadow 0.3s ease-in-out"
      >
        <Header />
        <TodoInput addTodo={addTodo} />
        {/* <TodoList todos={todos} /> */}
        {/* <Completed todos={todos} /> */}
        <Rutas tasks={todos} />
        {/* <TodoFilters /> */}
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
