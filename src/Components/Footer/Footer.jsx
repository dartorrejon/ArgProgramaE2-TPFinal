import { Box } from "@chakra-ui/react";
import TodoFilters from "../Filtro/TodoFilters";

const Footer = () => {
    return (
        <Box pos='fixed' bottom={0} w='500px' zIndex={5} bg='white'>
            <TodoFilters />
        </Box>
    );
};

export default Footer;