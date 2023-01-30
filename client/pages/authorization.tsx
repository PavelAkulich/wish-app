import AuthModule from "@/components/modules/AuthModule/AuthModule";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const isLogged = useAppSelector((store) => store.errorSlice.token);
  const router = useRouter();
  useEffect(() => {
    if (isLogged) router.replace('/');
  }, [isLogged]);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="lg:w-1/3 w-2/3 h-2/3 bg-gradient-to-r from-default-gradientDark to-default-gradientDark rounded-lg shadow-lg p-3">
        <AuthModule />
      </div>
    </div>
  );
}
