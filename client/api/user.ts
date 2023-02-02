import { IUserCred, IUserResponse, IUserRequest } from "@/types/UserTypes";
import { AxiosInstance, AxiosResponse } from "axios";

export const UserApi = (instance: AxiosInstance) => ({
  async getMe() {
    const { data } = await instance.get<IUserResponse>("auth/me");
    return data;
  },
  async loginUser(userCred: IUserCred) {
    const { data } = await instance.post<
      IUserResponse,
      AxiosResponse<IUserResponse>,
      IUserCred
    >("auth/login", userCred);
    return data;
  },
  async registerUser(userData: IUserRequest) {
    const { data } = await instance.post<
      IUserResponse,
      AxiosResponse<IUserResponse>,
      IUserRequest
    >("auth/register", userData);
    return data;
  },
});
