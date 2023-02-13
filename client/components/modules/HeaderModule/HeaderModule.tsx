import { destroyCookie } from "nookies";
import { useAppSelector } from "@/store/store";
import ButtonTemplate from "./../../UI/ButtonTemplate";
import { useAppDispatch } from "./../../../store/store";
import { logout } from "../AuthModule/store/userSlice";
import { useRouter } from "next/router";
import { setToken } from "@/store/slices/errorSlice";

function HeaderModule() {
  const { fullName, email } = useAppSelector((store) => store.userSlice);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(setToken(null));
    destroyCookie(null, "wishToken");
    router.replace("/authorization");
  };
  return (
    <div className="w-full h-[50px] flex justify-end px-10 gap-10 shadow-md">
      <div className="flex items-center grow">
        <div className="w-full text-right">{`${fullName}, ${email}`}</div>
      </div>
      <div className="flex items-center">
        <ButtonTemplate onClick={handleLogout}>Выйти</ButtonTemplate>
      </div>
    </div>
  );
}

export default HeaderModule;
