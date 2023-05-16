// import '../styles/app.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../src/components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Layout>
       <Component {...pageProps} />
    </Layout>
    </Provider>

  )
}
