import { Center, useTheme, useColorMode, } from "@chakra-ui/react";
import Filtros from "../Filtros/Filtros";

const Footer = ({ getFilter }) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const theme = useTheme();

    const bg =
        colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
    const colorBoton =
        colorMode === "dark" ? theme.colors.dark.navBtn : theme.colors.light.navBtn;
    return (
        <Center
            bg={bg}
            w='100%'
            mt="-1px"
            display={{ base: 'flex', md: 'none' }}
            color={colorBoton}
            justifyContent="space-around"
            border="0px solid #e2e8f0"
            paddingTop="10px"
            zIndex={10}
            pos='fixed'
            bottom='0px'
            left={0}
            right={0}
            h='80px'
        >
            <Filtros getFilter={getFilter} />
        </Center >
    );
};

export default Footer;