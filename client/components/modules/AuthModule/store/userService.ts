import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserCred, IUserResponse, IUserRequest } from "../../../../types/UserTypes";
import { setErrorMessage } from "../../../../store/slices/errorSlice";

const baseApiUrl = "/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "production"
        ? `${process.env.REACT_APP_BASE_URL}/`
        : `${process.env.REACT_APP_BASE_URL_DEV}/`
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<IUserResponse, IUserCred>({
      query: (data: IUserCred) => ({
        url: `${baseApiUrl}/login`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          dispatch(setErrorMessage(error));
        }
      },
    }),
    registerUser: builder.mutation<IUserResponse, IUserRequest>({
      query: (data: IUserRequest) => ({
        url: `${baseApiUrl}/register`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          dispatch(setErrorMessage(error));
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
