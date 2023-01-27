import AsideModule from "@/components/modules/AsideModule/AsideModule";
import HeaderModule from "@/components/modules/HeaderModule/HeaderModule";
import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  isLogged: boolean;
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ isLogged, children }) => {
  // add auth check later
  return isLogged ? (
    <div className="w-full h-full flex">
      <AsideModule />
      <div className="w-[calc(100%-200px)]">
        <HeaderModule />
        <div className="h-[calc(100%-80px)] w-full">{children}</div>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
