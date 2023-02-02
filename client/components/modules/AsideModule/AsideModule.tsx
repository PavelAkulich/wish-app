import MenuItem from "@/components/components/MenuItem";
import { menuList } from "./aside.constants";

function AsideModule() {
  return (
    <div className="h-full w-[200px] rounded-r-3xl bg-gradient-to-b pt-[100px] text-default-fontLight from-default-gradientDark to-default-gradientLight">
      <ul>
        {menuList.map((item) => (
          <MenuItem label={item.label} url={item.url} key={item.url} />
        ))}
      </ul>
    </div>
  );
}

export default AsideModule;
