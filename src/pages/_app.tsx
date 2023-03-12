import type { AppProps } from 'next/app';

import { ContainerCore } from "@/elements/ContainerCore";

import GlobalStyles from '@/styles/GlobalStyles';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerCore>
      <GlobalStyles/>
      <Header/>
      <Component {...pageProps} />
    </ContainerCore>
  )
}
