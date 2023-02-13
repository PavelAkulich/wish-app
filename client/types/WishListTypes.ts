import { IUser, IUserCommonInfo } from "./UserTypes";

export interface IWishItem {
  _id: string;
  user: IUser;
  name: string;
  avatarUrl?: string;
  description?: string;
  global: boolean
}

export interface IWishResponse {
  _id: string;
  name: string;
  avatarUrl?: string | null;
  description?: string | null;
  user: IUserCommonInfo;
  global: boolean
}


export interface IWishRequest {
  name: string,
  avatarUrl?: string,
  description?: string,
  global: boolean
}