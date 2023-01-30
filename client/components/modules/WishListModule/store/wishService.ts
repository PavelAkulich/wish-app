import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setErrorMessage } from "../../../../store/slices/errorSlice";

const baseApiUrl = "/wishList";
export const wishApi = createApi({
  reducerPath: "wishApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/`
        : `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/`,
  }),
  endpoints: (builder) => ({
    getWishList: builder.query<any, string>({
      query: (params: string) => `${baseApiUrl}/`,
      keepUnusedDataFor: 0,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
        } catch (err) {
          dispatch(setErrorMessage(err));
        }
      },
    }),
  }),
});

export const {
  useGetWishListQuery,
} = wishApi;
export const { getWishList } = wishApi.endpoints;
