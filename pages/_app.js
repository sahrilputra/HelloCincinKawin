import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from "next/head";
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider defaultTheme='dark'>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
