import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import errorSlice from "./slices/errorSlice";
import userSlice from "./../components/modules/AuthModule/store/userSlice";
// import { authApi } from "@/components/modules/AuthModule/store/userService";
// import { wishApi } from '@/components/modules/WishListModule/store/wishService';

export const makeStore = () =>
  configureStore({
    reducer: {
      errorSlice,
      userSlice,
      // [authApi.reducerPath]: authApi.reducer,
      // [wishApi.reducerPath]: wishApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(),
    // authApi.middleware,
    // wishApi.middleware,
  });

// export const store = makeStore();

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
