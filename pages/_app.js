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
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Mansour Alzahran portfolio."
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
