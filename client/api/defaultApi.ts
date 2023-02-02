import Cookies, { parseCookies } from "nookies";
import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import { UserApi } from "./user";
import { WishListApi } from './wish';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  wish: ReturnType<typeof WishListApi>;
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookie = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookie.wishToken;

  const instance = axios.create({
    baseURL:
      process.env.NODE_ENV === "production"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
        : `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    user: UserApi(instance),
    wish: WishListApi(instance),
  }
}
