import { FC } from "react";
import { GetServerSideProps } from "next";
import { Api } from "@/api/defaultApi";
import { IWishResponse } from "@/types/WishListTypes";

type WishItemDetailProps = {
  wishItem: IWishResponse;
};
const WishItemDetail: FC<WishItemDetailProps> = ({ wishItem }) => {
  console.log(wishItem);
  return <div>WishItemDetail</div>;
};

export default WishItemDetail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (typeof ctx.query.id === "undefined") {
    return {
      notFound: true,
    };
  }
  try {
    const data = await Api(ctx).wish.getWishItem(ctx.query.id?.toString());
    return {
      props: {
        wishItem: data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
