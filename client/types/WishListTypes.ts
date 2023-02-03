import { IUser, IUserCommonInfo } from "./UserTypes";

export interface IWishItem {
  _id: string;
  user: IUser;
  name: string;
  avatarUrl?: string;
  description?: string;
}

export interface IWishResponse {
  _id: string;
  name: string;
  avatarUrl?: string | null;
  description?: string | null;
  user: IUserCommonInfo;
}


export interface IWishRequest {
  name: string,
  avatarUrl?: string,
  description?: string,
}