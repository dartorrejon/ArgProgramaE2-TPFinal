import { Box } from "@chakra-ui/react";
import TodoFilters from "../Filtro/TodoFilters";

const Footer = ({ getFilter }) => {
    return (
        <Box pos='fixed' bottom={0} w='500px' zIndex={5} bg='white'>
            <TodoFilters getFilter={getFilter} />
        </Box>
    );
};

export default Footer;