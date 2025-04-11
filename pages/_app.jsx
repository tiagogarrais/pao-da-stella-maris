import "../styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
