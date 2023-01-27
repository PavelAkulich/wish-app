import type { AppProps } from "next/app";
import Head from "next/head";
import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen">
        <Head>
          <title>Wish APP</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AuthLayout isLogged={false}>
          <main className="w-full h-full bg-default-dark">
            <Component {...pageProps} />
          </main>
        </AuthLayout>
      </div>
    </Provider>
  );
}
