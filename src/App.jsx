import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import InputTask from "./Components/InputTask/InputTask";
import ListaTarea from "./Components/ListaTarea/ListaTarea";
import Filtro from "./Components/Filtro/Filtro";


function App() {
  return (
    <Box w="100%" h="100vh" bg="gray.50" pt="50px" display="flex">
    <Container
    width="500px"
    bg="white"
    padding="0"
    borderRadius="2px"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
    transition="box-shadow 0.3s ease-in-out">
        <Header></Header>
        <InputTask ></InputTask>
        <ListaTarea></ListaTarea>
        <Filtro></Filtro>
      
    </Container>
    </Box>
  );
}

export default App;