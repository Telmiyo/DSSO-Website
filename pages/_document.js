// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></Script>
      </body>
    </Html>
  );
}
