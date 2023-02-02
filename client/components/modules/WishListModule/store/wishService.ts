import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
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
  extractRehydrationInfo(action, rest) {
    if (action.type === HYDRATE) {
      return action.payload[rest.reducerPath];
    }
  },
  endpoints: (builder) => ({
    getWishList: builder.query<any, void>({
      query: () => `${baseApiUrl}/`,
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
  util: { getRunningQueriesThunk },
} = wishApi;
export const { getWishList } = wishApi.endpoints;
