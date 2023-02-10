import { Api } from "@/api/defaultApi";
import Card from "@/components/components/Card";
import DefaultCardButtonSection from "@/components/components/DefaultCardButtonSection";
import ButtonTemplate from "@/components/UI/ButtonTemplate";
import ModalTemplate from "@/components/UI/ModalTemplate";
import { IWishResponse } from "@/types/WishListTypes";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import WishListModal from "./components/WishListModal/WishListModal";

type WishListModuleProps = {
  wishList: IWishResponse[];
  title: string;
  isModal?: boolean;
};

const WishListModule: FC<WishListModuleProps> = ({
  wishList,
  title,
  isModal = true,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [wishListFront, setWishListFront] = useState<IWishResponse[]>(wishList);

  const handeleClose = () => setIsOpen(false);
  const handeleSuccess = (wishItem: IWishResponse) =>
    setWishListFront((prev) => [...prev, wishItem]);

  const handleView = (id: string) => () => router.push(`${router.pathname}/${id}`);
  const handleUpdate = (id: string) => () =>
    router.push(`/wish-list/${id}/edit`);
  const handleDelete = (id: string) => async () => {
    try {
      await Api().wish.deleteWishItem(id);
      setWishListFront((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-[50px] flex justify-between pr-20 pl-10">
        <div className="text-xl font-bold flex items-center">{title}</div>
        {isModal && (
          <ButtonTemplate onClick={() => setIsOpen(true)}>
            Добавить
          </ButtonTemplate>
        )}
      </div>
      <div className="h-[calc(100%-50px)] overflow-auto grid lg:grid-cols-4 sm:grid-cols-2 auto-rows-min">
        {wishListFront.map((item) => (
          <div onDoubleClick={handleView(item._id)} className="cursor-pointer">
            <Card
              key={item._id}
              title={item.name}
              description={item.description ? item.description : ""}
              avatar={item.avatarUrl ? item.avatarUrl : ""}
            >
              <DefaultCardButtonSection
                handleView={handleView(item._id)}
                handleUpdate={isModal ? handleUpdate(item._id) : undefined}
                handleDelete={isModal ? handleDelete(item._id) : undefined}
              />
            </Card>
          </div>
        ))}
      </div>
      <ModalTemplate open={isOpen} onClose={handeleClose}>
        <WishListModal
          closeMethod={handeleClose}
          successMethod={handeleSuccess}
        />
      </ModalTemplate>
    </div>
  );
};

export default WishListModule;
