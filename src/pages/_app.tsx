import Head from "next/head";
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";

import { ContainerCore } from "@/elements/ContainerCore";
import GlobalStyles from '@/styles/GlobalStyles';
import wrapper from "@/app/wrapper";

import 'react-toastify/dist/ReactToastify.min.css';

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" type="image/png" href="/images/png/logo-tablebooks.png"/>
        <title>Tablebooks</title>
      </Head>
      <ContainerCore>
        <GlobalStyles/>
        <Header/>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...props} />
      </ContainerCore>
    </Provider>
  )
}