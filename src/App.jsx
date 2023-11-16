import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Header from "./Components/Header/Header";
import InputTask from "./Components/InputTask/InputTask";
import ListaTarea from "./Components/ListaTarea/ListaTarea";
import Filtro from "./Components/Filtro/Filtro";

function App() {
  return (
    <Container mt={50} boxShadow="lg" transition="box-shadow 0.3s ease-in-out">
    
        <Header></Header>
        <InputTask ></InputTask>
        <ListaTarea></ListaTarea>
        <Filtro></Filtro>
      
    </Container>
  );
}

export default App;