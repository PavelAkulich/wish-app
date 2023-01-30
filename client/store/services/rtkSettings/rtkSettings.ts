import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { RootState } from "../../store";
import { setToken } from "../../slices/errorSlice";
// import { setToken, setUser } from "../../slices/errorSlice";

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === "production"
      ? `${process.env.REACT_APP_BASE_URL}/`
      : "/",
  prepareHeaders: (headers, api) => {
    const store = api.getState() as RootState;
    if (store?.errorSlice.token)
      headers.set("Authorization", "Bearer " + store?.errorSlice.token);
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const state = api.getState() as RootState;
    api.dispatch(setToken(null));
    // const refreshResult = await baseQuery(
    //   {
    //     url:
    //       process.env.NODE_ENV === "production"
    //         ? `${process.env.REACT_APP_BASE_URL}/b-login/refresh/`
    //         : "/b-login/refresh/",
    //     body: {
    //       refresh: state.userSlice.refresh,
    //     },
    //     method: "POST",
    //   },
    //   api,
    //   extraOptions
    // );
    // if (refreshResult.data) {
    //   const data = refreshResult.data as { token: string };
    //   api.dispatch(setToken(data));
    //   result = await baseQuery(args, api, extraOptions);
    // } else {
    //   api.dispatch(
    //     setUser({ username: null, access: null, refresh: null, isError: true })
    //   );
    // }
  }
  return result;
};
