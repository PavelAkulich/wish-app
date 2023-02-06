import { FC } from "react";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultContainer from "@/components/UI/DefaultContainer";
import ButtonTemplate from "@/components/UI/ButtonTemplate";

type WishItemModuleProps = {
  wishItem: IWishResponse;
};

const WishItemModule: FC<WishItemModuleProps> = ({ wishItem }) => {
  return (
    <div className="h-full">
      <DefaultContainer
        classNameOuterContainer="text-default w-full h-full"
        classNameInnerContainer="h-full bg-default-bg border border-solid border-default grid grid-rows-[50px_1fr_50px] py-10"
      >
        <div className="text-center font-bold text-2xl">{wishItem.name}</div>
        <div className="flex gap-4 p-10">
          <div className="w-2/3 text-lg">{wishItem.description}</div>
          <div className="w-1/3 text-lg">{wishItem.avatarUrl}</div>
        </div>
        <div className="flex px-10 justify-between items-center">
          <div>{`Владелец: ${wishItem.user.fullName}`}</div>
          <div className="flex gap-10 justify-between">
            <ButtonTemplate>Редактировать</ButtonTemplate>
            <ButtonTemplate>Удалить</ButtonTemplate>
          </div>
        </div>
      </DefaultContainer>
    </div>
  );
};

export default WishItemModule;
