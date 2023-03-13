import type { AppProps } from 'next/app';

import { ContainerCore } from "@/elements/ContainerCore";

import GlobalStyles from '@/styles/GlobalStyles';

import dynamic from 'next/dynamic';

import store from "@/app/store";

import { Provider } from "react-redux";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ContainerCore>
        <GlobalStyles/>
        <Header/>
        <Component {...pageProps} />
      </ContainerCore>
    </Provider>
  )
}
