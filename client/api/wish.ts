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
  async createWishItem(newWish: any) {
    const { data } = await instance.post<
      IWishResponse,
      AxiosResponse<IWishResponse>,
      any
    >("wishList", newWish, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  async updateWishItem(updWish: any, id: string) {
    const { data } = await instance.patch<
      { message: string },
      AxiosResponse<{ message: string }>,
      any
    >(`wishList/${id}`, updWish, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
