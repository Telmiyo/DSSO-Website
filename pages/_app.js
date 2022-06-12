import "../styles/globals.css";
import Head from "next/head";
import Main from "../layouts/main";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dune Special Spice Ops</title>
        <meta
          name="description"
          content="Dune is a videogame developed for Project III subject @ CITM"
        />
        <meta name="author" content="Alejandro Ávila & Telmo Beroiz" />
        <meta name="copyright" content="Alejandro Ávila & Telmo Beroiz" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="safe for kids" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </div>
  );
}

export default MyApp;
