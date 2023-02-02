import { IUser } from "./UserTypes";

export interface IWishItem {
  _id: string;
  user: IUser;
  name: string;
  avatarUrl?: string;
  description?: string;
}

export interface IWishResponse {
  _id: string | null;
  name: string | null;
  avatarUrl: string | null;
  description: string | null;
  user: any;
}
