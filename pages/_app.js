import { Global } from "@emotion/react";
import { reset } from "@/styles/reset";



export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  )
}
