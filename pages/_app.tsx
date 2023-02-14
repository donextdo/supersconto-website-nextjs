// import '../styles/app.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../src/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}
