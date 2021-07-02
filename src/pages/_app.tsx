/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.scss";
import "../styles/reset.css";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
