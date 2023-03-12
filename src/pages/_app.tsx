import type { AppProps } from 'next/app';

import { ContainerCore } from "@/elements/ContainerCore";

import GlobalStyles from '@/styles/GlobalStyles';

import Header from "@//components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerCore>
      <GlobalStyles/>
      <Header/>
      <Component {...pageProps} />
    </ContainerCore>
  )
}
