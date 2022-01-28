import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import DarkModeContextProvider from '../context/DartkModeContextProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>aceto.dev</title>
        <meta name="description" content="my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeContextProvider>
    </>
  );
}

export default MyApp
