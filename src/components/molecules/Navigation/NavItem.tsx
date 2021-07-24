import * as React from "react";
import { useRouter } from "next/dist/client/router";
import ActiveShape from "./ActiveShape";

interface subMenuState {
  name: string;
  url: string;
}
interface Props {
  data: {
    name: string;
    url: string;
    icon: string;
    mainMenu: string;
    subMenu: Array<subMenuState>;
  };
}

const NavItem: React.FC<Props> = ({ data }) => {
  const [show, setShow] = React.useState(false);
  const router = useRouter();

  const onShow = () => {
    if (!data.subMenu.length) return;
    setShow(!show);
  };

  const onHref = (url: string) => {
    router.push({ pathname: url }, undefined, { shallow: true });
  };

  return (
    <>
      <div
        className="w-full relative py-3 px-6 flex items-center justify-between cursor-pointer hover:bg-black-200"
        onClick={data.subMenu.length > 1 ? onShow : () => onHref(data.url)}
      >
        <div className="flex item-center">
          <img src={data.icon} alt="icon" />
          <h5 className="ml-4 font-semibold text-sm text-black-800">{data.name}</h5>
        </div>
        {data.subMenu.length > 1 && (
          <img
            src="/img/dropdown_icon.svg"
            className={`tranform transition-all duration-300 ${
              router.route.split("/")[1] === data.mainMenu || show ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
        {router.route === data.url && <ActiveShape disableBg />}
      </div>

      {data.subMenu.length > 1 && (
        <div
          className={`w-full h-fit-content ${
            show || router.route.split("/")[1] === data.mainMenu ? "" : "hidden"
          } `}
        >
          {data.subMenu.map((item, i) => (
            <div
              key={i}
              className="group relative w-full pl-16 pr-4 py-4 hover:bg-black-100 cursor-pointer "
              onClick={() => onHref(item.url)}
            >
              <h5 className="group-hover:text-black-600 text-sm text-black-800">{item.name}</h5>
              {router.route === item.url && <ActiveShape disableBg={false} />}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItem;
