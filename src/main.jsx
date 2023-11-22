import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./assets/Theme/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box >
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
