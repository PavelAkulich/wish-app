import AuthModule from "@/components/modules/AuthModule/AuthModule";
import { useAppSelector } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import DefaultContainer from './../components/UI/DefaultContainer';

export default function Home() {
  const isLogged = useAppSelector((store) => store.errorSlice.token);
  const router = useRouter();
  useEffect(() => {
    if (isLogged) router.replace('/');
  }, [isLogged]);
  return (
    <div className="w-full h-full flex justify-center items-center bg-default-grey">
      <div className="lg:w-1/3 w-2/3 h-2/3 bg-default-bg rounded-lg shadow-lg p-3 border-default border">
        <AuthModule />
      </div>
    </div>
  );
}
