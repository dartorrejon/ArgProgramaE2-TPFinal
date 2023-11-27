import { extendTheme } from "@chakra-ui/react"

const colors = {
    dark: {
        bgHF: "#424242",
        bgTodo: "#515151",
        color: "#e0e0e0",
        colorBoton: "#A3A2A2",
        lupa: "#4299E1",
        navBtn: "#A3A2A2",
        azul: "#4299E1"

    },
    light: {
        bgHF: "white",
        bgTodo: "white",
        color: "#8b8b8b",
        colorBoton: "e0e0e0",
        lupa: "gray",
        navBtn: "gray",
        azul: "#4299E1"

    }
}

export const theme = extendTheme({ colors })