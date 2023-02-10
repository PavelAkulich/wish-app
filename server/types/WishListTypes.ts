import { Document, Schema } from "mongoose";

export interface IWish extends Document {
  user: Schema.Types.ObjectId;
  name: string;
  global: boolean;
  avatarUrl?: string;
  description?: string;
}
