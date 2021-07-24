import * as React from "react";
import { useClickOutside } from "../../../hooks/UseClickOutside";

interface Props {
  isShow: boolean;
  index: number;
  data: {
    name: string;
    url: string;
    icon: string;
    mainMenu: string;
    subMenu: Array<subMenuState>;
  };
  onShow: Function;
}

interface subMenuState {
  name: string;
  url: string;
}

const NavSubItemMobile: React.FC<Props> = ({ isShow, onShow, data, index }) => {
  return (
    <div
      className={`${!isShow && "hidden"} ${
        index > 3 ? "border-r-4 right-2" : "border-l-4 left-2"
      } w-[160px] absolute top-[-144px] h-fit-content max-h-[124px] overflow-y-auto bg-white border-yellow-500 `}
      style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
    >
      {data.subMenu.map((item, i) => (
        <div
          key={i}
          className={`w-full py-[6px] px-[14px] text-caption1 border-b border-black-300 last:border-b-0 active:bg-black-200 ${
            index > 3 && "text-right"
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NavSubItemMobile;
