import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Box, ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box >
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
