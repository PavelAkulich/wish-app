import Image from "next/image";
import { FC, ReactNode } from "react";
import DefaultContainer from "../UI/DefaultContainer";
import { IUser } from "./../../types/UserTypes";

type CardProps = {
  title: string;
  description?: string;
  avatar?: string;
  owner?: IUser;
  children?: ReactNode;
};
const Card: FC<CardProps> = ({ title, description, avatar, children }) => {
  const src =
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${avatar}`
      : `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/${avatar}`;
  return (
    <DefaultContainer
      classNameOuterContainer="text-default w-full"
      classNameInnerContainer="h-full bg-default-bg border border-solid border-default"
    >
      <div className="flex gap-4">
        <div className="grow">{title}</div>
        {avatar && (
          <div className="w-20 relative">
            <Image
              className="object-top object-contain"
              loader={() => src}
              src={src}
              alt={title}
              fill
            />
          </div>
        )}
      </div>
      <div>{description}</div>
      {children}
    </DefaultContainer>
  );
};

export default Card;
