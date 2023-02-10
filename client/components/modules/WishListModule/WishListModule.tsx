import { Api } from "@/api/defaultApi";
import Card from "@/components/components/Card";
import DefaultCardButtonSection from "@/components/components/DefaultCardButtonSection";
import ButtonTemplate from "@/components/UI/ButtonTemplate";
import ModalTemplate from "@/components/UI/ModalTemplate";
import { IWishResponse } from "@/types/WishListTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import WishListModal from "./components/WishListModal/WishListModal";

type WishListModuleProps = {
  wishList: IWishResponse[];
};

const WishListModule: FC<WishListModuleProps> = ({ wishList }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [wishListFront, setWishListFront] = useState<IWishResponse[]>(wishList);

  const handeleClose = () => setIsOpen(false);
  const handeleSuccess = (wishItem: IWishResponse) =>
    setWishListFront((prev) => [...prev, wishItem]);

  const handleView = (id: string) => () => router.push(`/wish-list/${id}`);
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
        <div className="text-xl font-bold flex items-center">Список</div>
        <ButtonTemplate onClick={() => setIsOpen(true)}>
          Добавить
        </ButtonTemplate>
      </div>
      <div className="h-[calc(100%-50px)] overflow-auto grid lg:grid-cols-4 sm:grid-cols-2 auto-rows-min">
        {wishListFront.map((item) => (
          // <Link href={`/wish-list/${item._id}`}>
          <Card
            key={item._id}
            title={item.name}
            description={item.description ? item.description : ""}
            avatar={item.avatarUrl ? item.avatarUrl : ""}
          >
            <DefaultCardButtonSection
              handleView={handleView(item._id)}
              handleUpdate={handleUpdate(item._id)}
              handleDelete={handleDelete(item._id)}
            />
          </Card>
          // </Link>
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
