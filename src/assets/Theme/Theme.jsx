import { extendTheme } from "@chakra-ui/react"

const colors={
    dark:{
        negro:'#151515',
        gris:'#A3A2A2',
        grisOscuro:'#555555'
    },
    light:{
        celestito:'#99bbd9',
        azul:'#11539a',
        azulOscuro:'#153d67',
        azulGris:'#6494c2',

    }
}

export const theme = extendTheme({colors})