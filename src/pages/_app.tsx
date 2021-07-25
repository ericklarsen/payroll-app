import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextNProgress height={5} options={{ showSpinner: false }} color="#f3ad22" />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
