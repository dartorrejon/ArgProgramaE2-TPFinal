import { useState,useEffect } from "react";
import { Box, Container,CSSReset, ThemeProvider,ColorModeProvider } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import Todo from "./Components/Todo/Todo";
import TodoFilters from "./Components/Filtro/TodoFilters";
import { theme } from "./assets/Theme/Theme";



function App() {
  const datos = [
    { id: 1, task: "Hacer la comida", state: false },
    { id: 2, task: "Programar trabajo final", state: false },
    { id: 3, task: "Hacer los cuestionarios", state: false },
    { id: 4, task: "Terminar trabajo 7", state: false },
  ];
  const [todos, setTodos] = useState(datos);

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
  
  const [preFilter,setPreFilter]=useState([...todos])
  const handleBuscar = () => {
   
    if (buscar == "") {
      setPreFilter(preFilter)
      setRecarga(!recarga)
      console.log('cambio el prefilter');
    } else {
      setPreFilter([...todos])
      const buscarList = todos.filter((todo) => todo.task.includes(buscar));
      setTodos(buscarList);
    }
  };

  /*************************** */
  const[recarga,setRecarga]=useState(false)
  useEffect(()=>{
     console.log('prefilter:'+preFilter);
    const recargarTask=()=>{
      setTodos(preFilter);
    }
    recargarTask();
  },[recarga]);
  /*************************** */
  // },[buscar]);

  // const habilitarBusqueda=(busqueda)=>{
  //   console.log(busqueda);
  //   if(busqueda==''){
  //     setTodos(datos)
  //   }else{
  //     const buscarList = todos.filter((todo) => todo.task.includes(busqueda));
  //     setTodos(buscarList);
  //   }

  // }
  return (
    <ThemeProvider theme={theme}>
       <ColorModeProvider>
       <CSSReset />
        <Box  w="100%" h="100vh" bg="gray.50" pt="50px" display="flex">
        <Container
        width="500px"
        bg='white'
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
        />
        <TodoList
          todos={todos}
          handleSetComplete={handleSetComplete}
          handleDelTask={handleDelTask}
        />

        <TodoFilters />
      </Container>
    </Box>
    </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
