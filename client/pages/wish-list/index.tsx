import WishListModule from "@/components/modules/WishListModule/WishListModule";
import { FC } from "react";
import { wrapper } from "@/store/store";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Api } from "@/api/defaultApi";
import { IWishResponse } from '@/types/WishListTypes';

type WishList = {
  wishList: IWishResponse[];
};
const WishList: FC<WishList> = ({ wishList }) => {
  return <WishListModule wishList={wishList} />;
};

export default WishList;

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  try {
    const data = await Api(cxt).wish.getWishList();
    return {
      props: { wishList: data },
    };
  } catch (err) {
    return {
      props: { wishList: [] },
    };
  }
};
