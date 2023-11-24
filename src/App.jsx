import { useState, useContext } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import Todo from "./Components/Todo/Todo";
import TodoFilters from "./Components/Filtro/TodoFilters";
import Footer from "./Components/Footer/Footer";
import Rutas from "./Rutas";
import tareas from "./Constants/tareas.json";


function App() {
  const [todos, setTodos] = useState(tareas);

  const addTodo = (task) => {
    const ultimaTarea = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTask = {
      id: ultimaTarea + 1,
      task: task,
      state: false,
    };
    const todoList = [...todos];
    todoList.push(newTask);
    setTodos(todoList);
  };
  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, state: !todo.state };
      }
      return todo;
    });
    setTodos(updatedList);
  };
  const handleDelTask = (id) => {
    const deleteList = todos.filter((todo) => todo.id !== id);
    setTodos(deleteList);
  };

  /*************************** */

  const [buscar, setBuscar] = useState("");
  const handlehabilitarBusqueda = (tarea) => {
    setBuscar(tarea);
  };

  const handleBuscar = () => {
    console.log(buscar);
    console.log(todos);
    if (buscar == '') {
      setTodos(datos)
    } else {
      const buscarList = todos.filter((todo) => todo.task.includes(buscar));
      setTodos(buscarList);
    }
  };

  /*************************** */

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
        <Rutas tasks={todos} handleSetComplete={handleSetComplete} handleDelTask={handleDelTask} />
        {/* <TodoFilters /> */}
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
