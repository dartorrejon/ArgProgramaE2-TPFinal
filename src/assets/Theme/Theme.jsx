import { extendTheme } from "@chakra-ui/react"

const colors={
    dark:{
        bgHF:"#424242",
        bgTodo:"#515151",
        color:"#e0e0e0",
        colorBoton:"#8b8b8b"
        
    },
    light:{
        bgHF:"white",
        bgTodo:"white",
        color: "#8b8b8b",
        colorBoton: "e0e0e0"

    }
}

export const theme = extendTheme({colors})