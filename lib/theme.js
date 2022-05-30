import { extendTheme, Heading, Link, TableContainer, Table, Tr, Th, Td, Tbody, Thead, Tfoot, TableCaption, } from "@chakra-ui/react";
import { withProse, Prose } from "@nikolovlazar/chakra-ui-prose";

import "@fontsource/inter"; // Defaults to weight 400.

const components = {
  Heading: {
    variants: {
      "h1": {
        fontSize: "50.16px",
        lineHeight: "40px",
        fontWeight: 900,
        color: "black"
      },
      "h2": {
        fontSize: "41.80px",
        lineHeight: "36px",
        fontWeight: 700,
        color: "black"
      },
      "h3": {
        fontSize: "34.84px",
        lineHeight: "32px",
        fontWeight: 700,
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
  Text: {
    variants:{
      "t1": {
        fontSize: "29.03px",
        lineHeight: "28px",
        fontWeight: 400,
        color: "black"
      },
      "t2": {
        fontSize: "24.19px",
        lineHeight: "24px",
        fontWeight: 400,
        color: "black"
      },
      "t3": {
        fontSize: "20.16px",
        lineHeight: "20px",
        fontWeight: 400,
        color: "black"
      },
      "body1": {
        fontSize: "29.03px",
        lineHeight: "28px",
        fontWeight: 400,
        color: "black"
      },
      "body2": {
        fontSize: "24.19px",
        lineHeight: "24px",
        fontWeight: 400,
        color: "black"
      },
      "body3": {
        fontSize: "20.16px",
        lineHeight: "20px",
        fontWeight: 400,
        color: "black"
      },
    }
  },
  Link: {
    baseStyle: {
      color: "black",
      textUnderlineOffset: 3
    },
    variants: {
      "link-markdown":
      {
        color: "blue",
        textUnderlineOffset: 3
      }
    }
  }
};

const styles = {
  global: {
    body: {
      bg: "#DDDDDD",
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
    ul: {
      li: {
        ul: {
          li: {
            marginLeft: '1em'
          }
        }
      }
    }
  }
};

const fonts = {
  heading: "Fonseca",
  body: "Inter"
};

const colors = {
    primary: "#E4865B",
    secondary: "#F8F6F6",
    highlight: "#A0D1D7",
    warning: "#D98F20",
    danger: "#D26D76",
};

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
  table: props => <TableContainer><Table {...props} /></TableContainer>,
  caption: props => <TableCaption {...props} />,
  tbody: props => <Tbody {...props} />,
  thead: props => <Thead {...props} />,
  tfoot: props => <Tfoot {...props} />,
  tr: props => <Tr {...props} />,
  th: props => <Th {...props} />,
  td: props => <Td {...props} />,
};
export default theme;
