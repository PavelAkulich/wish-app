import { FC } from "react";
import DefaultContainer from "../UI/DefaultContainer";
import { IUser } from "./../../types/UserTypes";

type WishCardProps = {
  title: string;
  description: string;
  avatar: string;
  owner?: IUser;
};
const WishCard: FC<WishCardProps> = ({ title, description, avatar }) => {
  return <DefaultContainer>
    <div>{title}</div>
    {avatar && <div>{avatar}</div>}
    <div>{description}</div>
  </DefaultContainer>;
};

export default WishCard;
