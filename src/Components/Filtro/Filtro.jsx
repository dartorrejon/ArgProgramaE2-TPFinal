import { CheckIcon,CheckCircleIcon,SpinnerIcon} from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { PiCircleLight, } from "react-icons/pi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";







const Filtro = () => {
  return (
      <Flex
      mt="10px"
      color="grey"
      justifyContent="space-around"
      borderTop="1px solid #e2e8f0"
      paddingTop="10px"
    >
      <Box mb="10px" textAlign="center" display="flex" flexDirection="column" alignItems="center">
        <IoCheckmarkDoneSharp size="30px" mb="2px" strokeWidth={5} />
        <Text>All</Text>
      </Box>
      <Box mb="10px" textAlign="center" display="flex" flexDirection="column" alignItems="center">
        <IoMdCheckmarkCircle size="30px" mb="2px" strokeWidth={2} />
        <Text>Completed</Text>
      </Box>
      <Box mb="10px" textAlign="center" display="flex" flexDirection="column" alignItems="center">
        <PiCircleLight size="30px" mb="2px" strokeWidth={5} />
        <Text>Remaining</Text>
      </Box>
    </Flex>
  )
}

export default Filtro