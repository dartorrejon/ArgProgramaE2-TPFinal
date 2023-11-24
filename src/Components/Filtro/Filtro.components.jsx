import { Box, Flex, Text } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { PiCircleLight } from "react-icons/pi"

const FiltersContainer = ({children})=>{
    return(
        <Flex  mt="10px"
        color="grey"
        justifyContent="space-around"
        borderTop="1px solid #e2e8f0"
        paddingTop="10px">
            {children}
        </Flex>
    )
}
const FilterButton=({action,filter,icon})=>{

    
    return(
        <Box mb="10px" textAlign="center" display="flex" flexDirection="column" alignItems="center">
        {icon==1 && <IoCheckmarkDoneSharp size="30px" mb="2px" strokeWidth={5} />}
        {icon==2 && <IoMdCheckmarkCircle size="30px" mb="2px" strokeWidth={2}/>}
        {icon==3 &&  <PiCircleLight size="30px" mb="2px" strokeWidth={5} />}

        <Text>{filter}</Text>
      </Box>
    )
}



export {FiltersContainer,FilterButton}