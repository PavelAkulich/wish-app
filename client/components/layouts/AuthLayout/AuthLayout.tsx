import AsideModule from "@/components/modules/AsideModule/AsideModule";
import HeaderModule from "@/components/modules/HeaderModule/HeaderModule";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();
  return !(router.pathname === '/authorization') ? (
    <div className="w-full h-full flex bg-default-grey">
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
