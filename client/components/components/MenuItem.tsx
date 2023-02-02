import Link from "next/link";
import { FC, ReactNode } from "react";
import TooltipTemplate from "../UI/TooltipTemplate";
import { useRouter } from "next/router";

type MenuItemProps = {
  label: string;
  icon?: ReactNode;
  url: string;
};
const MenuItem: FC<MenuItemProps> = ({ label, url, icon }) => {
  const { pathname } = useRouter();
  return (
    <li>
      <TooltipTemplate text={label} placement="right">
        <Link
          href={url}
          className={`flex gap-4 p-2 py-4 transition-all border-l-4 border-solid border-transparent ${
            pathname.includes(url)
              ? "border-default-fontLight"
              : "hover:bg-default-gradientDark hover:border-default-fontLight"
          } `}
        >
          <div>{icon}</div>
          <div className="text-left grow">{label}</div>
        </Link>
      </TooltipTemplate>
    </li>
  );
};

export default MenuItem;
