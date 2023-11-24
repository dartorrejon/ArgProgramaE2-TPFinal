import { Box, Flex, Text,useTheme, useColorMode } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { PiCircleLight } from "react-icons/pi"



const FiltersContainer = ({children})=>{

    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();
  
    const bg =
    colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
    const color =
    colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;


    return(
        <Flex 
        bg={bg}
        mt="10px"
        color="grey"
        justifyContent="space-around"
        borderTop="1px solid #e2e8f0"
        paddingTop="10px">
            {children}
        </Flex>
    )
}
const FilterButton=({action,filter,icon})=>{

    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();
  
    const bg =
    colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
    const color =
    colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;

    
    return(
        <Box 
        mb="10px"
        textAlign="center" 
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        >
            
        {icon==1 && <IoCheckmarkDoneSharp size="30px" mb="2px" strokeWidth={5} color={color}/>}
        {icon==2 && <IoMdCheckmarkCircle size="30px" mb="2px" strokeWidth={2} color={color}/>}
        {icon==3 &&  <PiCircleLight size="30px" mb="2px" strokeWidth={5} color={color}/>}

        <Text>{filter}</Text>
      </Box>
    )
}



export {FiltersContainer,FilterButton}