import { destroyCookie } from "nookies";
import { useAppSelector } from "@/store/store";
import ButtonTemplate from "./../../UI/ButtonTemplate";
import { useAppDispatch } from "./../../../store/store";
import { logout } from "../AuthModule/store/userSlice";
import { useRouter } from "next/router";
import { setToken } from '@/store/slices/errorSlice';

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
    <div className="w-full h-[50px]">
      <div>{`${fullName} ${email}`}</div>
      <div>
        <ButtonTemplate onClick={handleLogout}>Выйти</ButtonTemplate>
      </div>
    </div>
  );
}

export default HeaderModule;
