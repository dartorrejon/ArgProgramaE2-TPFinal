import { CheckIcon,CheckCircleIcon,SpinnerIcon} from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Filtro = () => {
  return (
    <Flex mt='10px'
           color='grey' justifyContent="space-around">
        <Box mb='10px' textAlign='center'>
           <CheckIcon boxSize={6}mb='2px' />
           <Text>All</Text>
        </Box>
        <Box mb='10px' textAlign='center'>
           <CheckCircleIcon boxSize={6}mb='5px' />
           <Text>Completed</Text>
        </Box>
        <Box mb='10px' textAlign='center'>
           <SpinnerIcon boxSize={6}mb='5px' />
           <Text>Remaining</Text>
        </Box>
        
    </Flex>
  )
}

export default Filtro