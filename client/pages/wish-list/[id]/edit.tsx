import { FC } from "react";
import { GetServerSideProps } from "next";
import { Api } from "@/api/defaultApi";
import { IWishResponse } from "@/types/WishListTypes";
import WishItemEditModule from "../../../components/modules/WishItemEditModule/WishItemEditModule";
import HeadLayout from "@/components/layouts/HeadLayout/HeadLayout";

type WishItemDetailProps = {
  wishItem: IWishResponse;
};
const WishItemEdit: FC<WishItemDetailProps> = ({ wishItem }) => {
  return (
    <HeadLayout
      title={wishItem.name}
      description={wishItem?.description || `${wishItem.name} edit page`}
    >
      <WishItemEditModule wishItem={wishItem} />
    </HeadLayout>
  );
};

export default WishItemEdit;

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
