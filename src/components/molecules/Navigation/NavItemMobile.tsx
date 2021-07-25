import * as React from "react";
import { useClickOutside } from "../../../hooks/clickOutside";
import NavSubItemMobile from "./NavSubItemMobile";
import { useRouter } from "next/dist/client/router";

interface Props {
  data: {
    name: string;
    url: string;
    icon: string;
    mainMenu: string;
    subMenu: Array<subMenuState>;
  };
  hideDivider: boolean;
  index: number;
}

interface subMenuState {
  name: string;
  url: string;
}

const NavItemMobile: React.FC<Props> = ({ data, index }) => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const menuRef = React.useRef(null);
  const router = useRouter();

  const onShow = () => {
    setShow(!isShow);
  };

  useClickOutside(menuRef, () => {
    setShow(false);
  });

  const onHref = (url: string) => {
    router.push({ pathname: url }, undefined, { shallow: true });
    setShow(false);
  };

  return (
    <div ref={menuRef} className="flex flex-col items-center mr-[18px] last:mr-0 relative">
      <div className="absolute top-[-12px] flex">
        {data.subMenu.length > 1 &&
          [...Array(3).keys()].map((i) => (
            <div key={i} className="h-1 w-1 bg-yellow-500 rounded-full mr-[2px] last:mr-0"></div>
          ))}
      </div>
      <img
        src={data.icon}
        className="w-[22px]"
        onClick={data.subMenu.length ? onShow : () => onHref(data.url)}
      />

      {(router.route === data.url || router.route.split("/")[1] === data.mainMenu) && (
        <div className="h-1 w-8 bg-yellow-500 rounded-full absolute bottom-[-10px]"></div>
      )}

      {data.subMenu.length > 1 && (
        <NavSubItemMobile data={data} index={index} isShow={isShow} onHref={onHref} />
      )}
    </div>
  );
};

export default NavItemMobile;
