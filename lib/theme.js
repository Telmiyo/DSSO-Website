import { extendTheme, Heading, Link, TableContainer, Table,Tr,Th, Td, Tbody,Thead,Tfoot,TableCaption, } from "@chakra-ui/react";
import { withProse, Prose } from "@nikolovlazar/chakra-ui-prose";

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
      },
      "h1-markdown": {
        display: "block",
        fontSize: "2em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
      },
      "h2-markdown": {
        display: "block",
        fontSize: "1.5em",
        marginTop: "0.83em",
        marginBottom: "0.83em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
      },
      "h3-markdown": {
        display: "block",
        fontSize: "1.17em",
        marginTop: "1em",
        marginBottom: "1em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
      },
      "h4-markdown": {
        display: "block",
        fontSize: "1em",
        marginTop: "1.33em",
        marginBottom: "1.33em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
      },
      "h5-markdown": {
        display: "block",
        fontSize: ".83em",
        marginTop: "1.67em",
        marginBottom: "1.67em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
      },
      "h6-markdown": {
        display: "block",
        fontSize: ".67em",
        marginTop: "2.33em",
        marginBottom: "2.33em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold"
      },

    }
  },
  Link: {
    baseStyle: {
      color: "black",
      textUnderlineOffset: 3
    },
    variants:{
      "link-markdown":
      {
        color:"blue",
        textUnderlineOffset: 3
      }
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
    blockquote: {
      fontStyle: "italic",
      fontWeight: "semibold",
      paddingStart: 4,
      my: { base: 6, md: 8 },
      borderStartWidth: "4px",
      borderStartColor: "gray.200",

      _dark: {
        borderStartColor: "gray.600"
      }
    },
    pre: {
      p: 4,
      rounded: 'md',
      bg: 'gray.700',
      color: 'gray.50',
      overflow: 'auto',
  
      _dark: {
        bg: 'gray.800',
      },
  
      code: {
        fontWeight: 'normal',
  
        '&::before, &::after': {
          content: '""',
        },
      },
    },
    code: {
      fontWeight: 'semibold',
  
      '&::before, &::after': {
        content: '"`"',
      },
    },
    ul:{
      li:{
        ul:{
          li:{
            marginLeft: '1em'
          }
        }
      }
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

const theme = extendTheme(
  {
    config,
    components,
    styles,
    fonts,
    colors
  },
  withProse()
);

export const themeMarkdown = {
  a: props => <Link variant="link-markdown" {...props} />,
  blockquote: props => (
    <Prose>
      <blockquote {...props} />
    </Prose>
  ),
  code: props => <Prose {...props}></Prose>,
  h1: props => <Heading as="h1" variant="h1-markdown" {...props} />,
  h2: props => <Heading as="h2" variant="h2-markdown" {...props} />,
  h3: props => <Heading as="h3" variant="h3-markdown" {...props} />,
  h4: props => <Heading as="h4" variant="h4-markdown" {...props} />,
  h5: props => <Heading as="h5" variant="h5-markdown" {...props} />,
  h6: props => <Heading as="h6" variant="h6-markdown" {...props} />,
  table: props => <TableContainer><Table {...props}/></TableContainer>,
  caption: props => <TableCaption {...props}/>,
  tbody: props => <Tbody {...props}/>,
  thead: props => <Thead {...props}/>,
  tfoot: props => <Tfoot {...props}/>,
  tr: props => <Tr {...props}/>,
  th: props => <Th {...props}/>,
  td: props => <Td {...props}/>,
};
export default theme;
