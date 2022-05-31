import '../styles/globals.css'
import Head from "next/head"
import Main from "../layouts/main"

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DSSO - Home</title>
    </Head>
    <Main>
      <Component {...pageProps} />
    </Main>

  </div>
}

export default MyApp
