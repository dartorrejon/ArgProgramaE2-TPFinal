import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Header from './Components/Header/Header'
import InputTask from './Components/InputTask/InputTask'
import ListaTarea from './Components/ListaTarea/ListaTarea'

function App() {
  

  return (
   <Flex direction='column'> 
     <Header></Header>
     <InputTask></InputTask>
     <ListaTarea></ListaTarea>   
      
   </Flex>
   
  )
}

export default App
