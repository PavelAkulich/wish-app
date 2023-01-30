import AsideModule from "@/components/modules/AsideModule/AsideModule";
import HeaderModule from "@/components/modules/HeaderModule/HeaderModule";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const isLogged = useAppSelector((store) => store.errorSlice.token);
  const router = useRouter();
  useEffect(() => {
    if (!isLogged) router.replace("/authorization");
  }, [isLogged]);
  return !(router.pathname === '/authorization') ? (
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
