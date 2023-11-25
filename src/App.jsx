import { useState, useEffect } from "react";
import { Box, Container, CSSReset, ThemeProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import Todo from "./Components/Todo/Todo";
import TodoFilters from "./Components/Filtro/TodoFilters";
import { theme } from "./assets/Theme/Theme";
import Rutas from "./Rutas";



function App() {
  const datos = [
    { id: 1, task: "Hacer la comida", state: false },
    { id: 2, task: "Programar trabajo final", state: true },
    { id: 3, task: "Hacer los cuestionarios", state: true },
    { id: 4, task: "Terminar trabajo 7", state: false },
    { id: 5, task: "Sacar al perro", state: false },
    { id: 6, task: "Arreglar bugs", state: true },
    { id: 7, task: "Leer documentacion sobre regex", state: false },
    { id: 8, task: "Implementar Chakra UI", state: true },
  ];


  const [todos, setTodos] = useState(datos);
  const [auxList, setAuxList] = useState(datos)
  const [filter, setFilter] = useState('All');
  const [buscar, setBuscar] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();



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
    setAuxList(todoList) //Lista Auxiliar
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, state: !todo.state };
      }
      return todo;
    });
    setTodos(updatedList);

    const updatedList2 = auxList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, state: !todo.state };
      }
      return todo;
    });
    setAuxList(updatedList2);
  };

  const handleDelTask = (id) => {
    const deleteList = auxList.filter((todo) => todo.id !== id);
    const deleteList2 = todos.filter((todo) => todo.id !== id);
    setAuxList(deleteList)
    setTodos(deleteList2);
  };

  const handlehabilitarBusqueda = (tarea) => {
    setBuscar(tarea);
  };

  const handleBuscar = () => {
    if (buscar == "") {
      setTodos(auxList)
      console.log('cargamos Lista AUx');
    } else {
      const buscarList = todos.filter((todo) => todo.task.includes(buscar));
      setTodos(buscarList);
    }
  };

  const getFilter = (filtro) => {
    setFilter(filtro);
  }

  const bg =
    colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
  const color =
    colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Box w="100%" h="100vh" bg="gray.50" pt="50px" display="flex">
          <Container
            width="500px"
            h={1}
            bg={bg}
            padding="0"

            borderRadius="2px"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
            transition="box-shadow 0.3s ease-in-out"
          >
            <Header onBuscar={handleBuscar} />
            <TodoInput
              addTodo={addTodo}
              inputValue={buscar}
              onHabilitarBusqueda={handlehabilitarBusqueda}
              setTodos={setTodos}
              auxList={auxList}
            />
            <TodoList
              todos={todos}
              handleSetComplete={handleSetComplete}
              handleDelTask={handleDelTask}
              filter={filter}
              setTodos={setTodos}
              lista={auxList}
              setAuxList={setAuxList}
            />

            <TodoFilters getFilter={getFilter} />
          </Container>
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
