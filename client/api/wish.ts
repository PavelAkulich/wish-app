import { IWishRequest, IWishResponse } from "@/types/WishListTypes";
import { AxiosInstance, AxiosResponse } from "axios";

export const WishListApi = (instance: AxiosInstance) => ({
  async getWishList() {
    const { data } = await instance.get<IWishResponse[]>("wishList");
    return data;
  },
  async getWishItem(id: string) {
    const { data } = await instance.get<IWishResponse>("wishList/" + id);
    return data;
  },
  async createWishItem(newWish: IWishRequest) {
    const { data } = await instance.post<
      IWishResponse,
      AxiosResponse<IWishResponse>,
      IWishRequest
    >("wishList", newWish);
    return data;
  },
});
