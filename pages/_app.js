import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import Head from "next/head";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider slug={router.route}>
      <Head>
        <title>
          Mans-Software Developer
        </title>
        <meta name="viewport" 
        content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

        <meta
          name="description"
          content="Mansour Alzahran portfolio."
        />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
