import App, { AppProps } from "next/app";
import Head from "next/head";
import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";
import { parseCookies } from "nookies";
import { setUser } from "@/components/modules/AuthModule/store/userSlice";
import { setToken } from "@/store/slices/errorSlice";
import { Api } from "@/api/defaultApi";

const MyApp = ({ Component, ...rest }: Omit<AppProps, "pageProps">) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <div className="w-screen h-screen">
        <AuthLayout>
          <main className="w-full h-full bg-default-dark">
            <Component {...props.pageProps} />
          </main>
        </AuthLayout>
      </div>
    </Provider>
  );
};

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async (appCtx): Promise<any> => {
      const { Component, ctx } = appCtx;
      const { wishToken } = parseCookies(ctx);
      const childrenGip = await App.getInitialProps(appCtx);
      if (ctx.pathname !== "/authorization") {
        try {
          const data = await Api(ctx).user.getMe();
          store.dispatch(
            setUser({
              fullName: data.fullName,
              email: data.email,
              _id: data._id,
            })
          );
          store.dispatch(setToken(wishToken));
          return {
            pageProps: {
              ...childrenGip.pageProps,
              store,
            },
          };
        } catch (err) {
          console.log(err);
          ctx?.res?.writeHead(301, {
            Location: "/authorization",
          });
          ctx?.res?.end();
          return {
            pageProps: {
              ...childrenGip.pageProps,
              store,
            },
          };
        }
      }
    }
);

export default MyApp;
