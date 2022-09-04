import Layout from '../components/layout/layout';
import Head from "next/head";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next events</title>
        <meta
          name='viewport'
          content='initial-scale=1.0'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
