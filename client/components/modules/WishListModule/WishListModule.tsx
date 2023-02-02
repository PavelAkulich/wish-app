import Card from "@/components/components/Card";
import ButtonTemplate from "@/components/UI/ButtonTemplate";
import { IWishItem } from "@/types/WishListTypes";
import { FC } from "react";

type WishListModuleProps = {
  wishList: IWishItem[];
};

const WishListModule: FC<WishListModuleProps> = ({ wishList }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-[50px] flex justify-between pr-20 pl-10">
        <div className="text-xl font-bold flex items-center">Список</div>
        <ButtonTemplate>Добавить</ButtonTemplate>
      </div>
      <div className="h-[calc(100%-50px)] overflow-auto grid lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 auto-rows-min">
        {wishList.map((item) => (
          <Card
            key={item._id}
            title={item.name}
            description={item.description}
            avatar={item.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default WishListModule;
