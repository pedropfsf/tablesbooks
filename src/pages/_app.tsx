import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

import { ContainerCore } from "@/elements/ContainerCore";
import GlobalStyles from '@/styles/GlobalStyles';
import wrapper from "@/app/wrapper";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ContainerCore>
        <GlobalStyles/>
        <Header/>
        <Component {...props} />
      </ContainerCore>
    </Provider>
  )
}

export default wrapper.withRedux(App);