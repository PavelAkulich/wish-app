import { model, Schema } from "mongoose";
import { IWish } from "./../types/WishListTypes";

const WishListSchema: Schema = new Schema<IWish>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default model("Wish", WishListSchema);
