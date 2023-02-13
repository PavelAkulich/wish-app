import WishListModule from "@/components/modules/WishListModule/WishListModule";
import { FC } from "react";
import { GetServerSideProps } from "next";
import { Api } from "@/api/defaultApi";
import { IWishResponse } from "@/types/WishListTypes";
import HeadLayout from "@/components/layouts/HeadLayout/HeadLayout";

type WishList = {
  wishList: IWishResponse[];
};
const WishList: FC<WishList> = ({ wishList }) => {
  return (
    <HeadLayout description="list of wish item (basic CRUD page)">
      <WishListModule
        wishList={wishList}
        title="Список всех видимых записей (отображаются записи с привязкой к текущему пользователю + записи помеченные как доступные всем)"
        isModal={false}
      />
    </HeadLayout>
  );
};

export default WishList;

export const getServerSideProps: GetServerSideProps = async (cxt) => {
  try {
    const data = await Api(cxt).wish.getWishListAll();
    return {
      props: { wishList: data },
    };
  } catch (err) {
    return {
      props: { wishList: [] },
    };
  }
};
