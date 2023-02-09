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
  async updateWishItem(updWish: IWishRequest, id: string) {
    const { data } = await instance.patch<
      { message: string },
      AxiosResponse<{ message: string }>,
      IWishRequest
    >(`wishList/${id}`, updWish);
    return data;
  },
  async deleteWishItem(id: string) {
    const { data } = await instance.delete<
      { message: string },
      AxiosResponse<{ message: string }>
    >(`wishList/${id}`);
    return data;
  },
});
