import { FC } from "react";
import DefaultContainer from "../UI/DefaultContainer";
import { IUser } from "./../../types/UserTypes";

type CardProps = {
  title: string;
  description?: string;
  avatar?: string;
  owner?: IUser;
};
const Card: FC<CardProps> = ({ title, description, avatar }) => {
  return (
    <DefaultContainer
      classNameOuterContainer="text-default w-full"
      classNameInnerContainer="h-full bg-default-bg border border-solid border-default rounded-2xl"
    >
      <div>{title}</div>
      {avatar && <div>{avatar}</div>}
      <div>{description}</div>
    </DefaultContainer>
  );
};

export default Card;
