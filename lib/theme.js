import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    variants: {
      "example-title": {
        fontSize: 50,
        fontWeight: 700,
        lineHeight: 1.8,
        textUnderlineOffset: 30,
        textDecoration: "underline",
        textDecorationColor: "white",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        color: "black"
      }
    }
  },
  Link: {
    baseStyle: {
      color: "black",
      textUnderlineOffset: 3
    }
  }
};

const styles = {
  global: {
    body: {
      bg: "white",
      lineHeight: "base",
      textColor: "#444"
    },
    h1: {
      display: "block",
      fontSize: "2em",
      marginTop: "0.67em",
      marginBottom: "0.67em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold"
    },
    h2: {
        display: "block",
      fontSize: "1.5em",
      marginTop: "0.83em",
      marginBottom: "0.83em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold"
    },
    h3: {
        display: "block",
      fontSize: "1.17em",
      marginTop: "1em",
      marginBottom: "1em",
      marginLeft: 0,
      marginRight: 0,
      fontWeight: "bold"
    },
    a: {
      link:{
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'auto',
        active:{color:'#3399ff'}
      },
      visited:{
        color: 'purple',
        textDecoration: 'underline',
        cursor: 'auto'
      },
     
    }
  }
};

const fonts = {
  heading: "Open Sans, sans-serif",
  body: "Raleway, sans-serif"
};

const colors = {};

const config = {
  initialColorMode: "white",
  useSystemColorMode: false
};

const theme = extendTheme({
  config,
  components,
  styles,
  fonts,
  colors
});

export default theme;
