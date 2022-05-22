import { extendTheme } from "@chakra-ui/react";

const components = {
    Heading: {
        variants: {
            'example-title': {
                fontSize: 50,
                fontWeight: 700,
                lineHeight: 1.8,
                textUnderlineOffset: 30,
                textDecoration: 'underline',
                textDecorationColor: 'white',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                color: 'black'
            },
        }
    },
    Link: {
        baseStyle: {
            color: 'black',
            textUnderlineOffset: 3
        }
    }
}

const styles = {
    global: {
        body: {
            bg: 'white',
            lineHeight: 'base',
            textColor: "#444"
        }
    }
}

const fonts = {
    heading: 'Open Sans, sans-serif',
    body: 'Raleway, sans-serif'
}

const colors = {

}

const config = {
    initialColorMode: 'white',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    components,
    styles,
    fonts,
    colors
})

export default theme
