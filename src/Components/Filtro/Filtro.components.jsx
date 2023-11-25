import { Box, Flex, Text, useTheme, useColorMode } from "@chakra-ui/react"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { PiCircleLight } from "react-icons/pi"



const FiltersContainer = ({ children }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();

    const bg =
        colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
    const color =
        colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;


    return (
        <Flex
            bg={bg}
            mt="-1px"
            color="grey"
            justifyContent="space-around"
            border="0px solid #e2e8f0"
            paddingTop="10px"
            zIndex={10}
            pos='absolute'
            bottom={0}
            left={0}
            right={0}
        >
            {children}
        </Flex>
    )
}
const FilterButton = ({ action, filter, icon, getFilter }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();

    const bg =
        colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
    const color =
        colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;


    return (
        <Box
            mb="10px"
            textAlign="center"
            display="flex"
            flexDirection="column"
            borderTop="2px solid blue"
            alignItems="center"
            onClick={() => getFilter(filter)}>
            {icon == 1 && <IoCheckmarkDoneSharp size="30px" mb="2px" strokeWidth={5} />}
            {icon == 2 && <IoMdCheckmarkCircle size="30px" mb="2px" strokeWidth={2} />}
            {icon == 3 && <PiCircleLight size="30px" mb="2px" strokeWidth={5} />}
            <Text>{filter}</Text>
        </Box>
    )
}



export { FiltersContainer, FilterButton }