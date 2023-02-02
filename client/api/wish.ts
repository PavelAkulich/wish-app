import { IWishItem, IWishResponse } from "@/types/WishListTypes";
import { AxiosInstance } from "axios";

export const WishListApi = (instance: AxiosInstance) => ({
  async getWishList(token: string) {
    const { data } = await instance.get<IWishResponse[]>("wishList", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  },
});
