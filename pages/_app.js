import "../styles/globals.css";
import Head from "next/head";
import Main from "../layouts/main";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <title>DSSO - Home</title>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </div>
  );
}

export default MyApp;
