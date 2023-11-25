import { Box, Text, useTheme, useColorMode } from "@chakra-ui/react"
import { useState } from "react"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { PiCircleLight } from "react-icons/pi"

const Filtros = ({ getFilter }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();

    const bg =
        colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
    const colorAzul =
        colorMode === "dark" ? theme.colors.dark.azul : theme.colors.light.azul;

    const [activo, setActivo] = useState([true, false, false])

    function activo1() {
        setActivo([true, false, false])
        console.log(activo)
    }
    function activo2() {
        setActivo([false, true, false])
        console.log(activo)
    }
    function activo3() {
        setActivo([false, false, true])
        console.log(activo)
    }

    return (
        <>
            <Box
                mb="10px"
                pt="5px"
                w='20%'
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderTop={activo[0] && `2px solid ${colorAzul}`}
                color={activo[0] && colorAzul}
                _hover={{ borderTop: `2px solid ${colorAzul}` }}
                onClick={() => {
                    getFilter("All")
                    activo1()
                }}>
                <IoCheckmarkDoneSharp size="30px" mb="2px" strokeWidth={5} />
                <Text>All</Text>
            </Box>
            <Box
                mb="10px"
                pt="5px"
                w='20%'
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderTop={activo[1] && `2px solid ${colorAzul}`}
                color={activo[1] && colorAzul}
                _hover={{ borderTop: `2px solid ${colorAzul}` }}
                onClick={() => {
                    getFilter("Completed")
                    activo2()
                }}>
                <IoMdCheckmarkCircle size="30px" mb="2px" strokeWidth={2} />
                <Text>Completed</Text>
            </Box>
            <Box
                mb="10px"
                pt="5px"
                w='20%'
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                borderTop={activo[2] && `2px solid ${colorAzul}`}
                color={activo[2] && colorAzul}
                _hover={{ borderTop: `2px solid ${colorAzul}` }}
                onClick={() => {
                    getFilter("Remaining")
                    activo3()
                }}>
                <PiCircleLight size="30px" mb="2px" strokeWidth={2} />
                <Text>Remaining</Text>
            </Box>
        </>
    )
}

export default Filtros;