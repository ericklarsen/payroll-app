import * as React from "react";

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
  onHref: (url: string, callback?: () => void) => void;
}

interface subMenuState {
  name: string;
  url: string;
}

const NavSubItemMobile: React.FC<Props> = ({ isShow, data, index, onHref }) => {
  return (
    <div
      className={`${
        !isShow ? "-translate-y-4 opacity-0 pointer-events-none" : "-translate-y-0 opacity-100"
      } ${
        index > 3 ? "border-r-4 right-2" : "border-l-4 left-2"
      } transition-all w-[180px] absolute top-[-155px] h-fit-content bg-white border-yellow-500 `}
      style={{ boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)" }}
    >
      <div
        className={`absolute w-1 h-2 bg-yellow-500 bottom-[-8px] ${
          index > 3 ? "right-[-4px]" : "left-[-4px]"
        } `}
      ></div>
      <div className="w-full max-h-[124px] overflow-y-auto relative">
        {data.subMenu.map((item, i) => (
          <div
            key={i}
            onClick={() => onHref(item.url)}
            className={`w-full py-[10px] px-[14px] text-caption1 border-b border-black-300 last:border-b-0 active:bg-black-200 ${
              index > 3 && "text-right"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavSubItemMobile;
