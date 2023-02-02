import WishListModule from "@/components/modules/WishListModule/WishListModule";
import { FC } from "react";
import { wrapper } from "@/store/store";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Api } from "@/api/defaultApi";

type WishList = {
  wishList: any;
};
const WishList: FC<WishList> = ({ wishList }) => {
  return <WishListModule wishList={wishList} />;
};

export default WishList;

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  try {
    const { wishToken } = parseCookies(cxt);
    const data = await Api(cxt).wish.getWishList(wishToken);
    return {
      props: { wishList: data },
    };
  } catch (err) {
    return {
      props: { wishList: [] },
    };
  }
};
