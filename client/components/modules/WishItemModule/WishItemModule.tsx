import { FC } from "react";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultContainer from "@/components/UI/DefaultContainer";
import ButtonTemplate from "@/components/UI/ButtonTemplate";
import { useRouter } from "next/router";
import { Api } from "@/api/defaultApi";
import Image from "next/image";

type WishItemModuleProps = {
  wishItem: IWishResponse;
  onlyView?: boolean;
};

const WishItemModule: FC<WishItemModuleProps> = ({
  wishItem,
  onlyView = false,
}) => {
  const router = useRouter();
  const src =
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${wishItem.avatarUrl}`
      : `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/${wishItem.avatarUrl}`;
  const editItem = () => {
    router.push(`${wishItem._id}/edit`);
  };
  console.log(onlyView);
  const deleteItem = async () => {
    try {
      await Api().wish.deleteWishItem(wishItem._id);
    } catch (err) {
      console.log(err);
    } finally {
      router.push(`/wish-list`);
    }
  };

  return (
    <div className="h-full">
      <DefaultContainer
        classNameOuterContainer="text-default w-full h-full"
        classNameInnerContainer="h-full bg-default-bg border border-solid border-default grid grid-rows-[50px_1fr_50px] py-10"
      >
        <div className="text-center font-bold text-2xl">{wishItem.name}</div>
        <div className="flex gap-4 p-10">
          <div className="w-2/3 text-lg">{wishItem.description}</div>
          {/* <div className="w-1/3 text-lg">{wishItem.avatarUrl}</div> */}
          <div className="w-1/3 text-lg relative">
            <Image
              className="object-top object-contain"
              loader={() => src}
              src={src}
              alt={wishItem.name}
              fill
            />
          </div>
        </div>
        <div className="flex px-10 justify-between items-center">
          <div>{`Владелец: ${wishItem.user.fullName}`}</div>
          {!onlyView && (
            <div className="flex gap-10 justify-between">
              <ButtonTemplate onClick={editItem}>Редактировать</ButtonTemplate>
              <ButtonTemplate onClick={deleteItem}>Удалить</ButtonTemplate>
            </div>
          )}
        </div>
      </DefaultContainer>
    </div>
  );
};

export default WishItemModule;
