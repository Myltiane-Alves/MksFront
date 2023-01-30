import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head  from "next/head"
import { Provider } from "react-redux"
import { store } from "../redux/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MKS Sistemas</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
