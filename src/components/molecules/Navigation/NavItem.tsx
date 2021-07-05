import * as React from "react";
import dashboard_icon from "../../../../public/img/dashboard_icon.svg";
import dropdown_icon from "../../../../public/img/dropdown_icon.svg";
import Image from "next/image";
import Link from "next/link";
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
    icon: StaticImageData;
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
    router.push(
      {
        pathname: url,
        // query: {
        //   pageId: "page-1", // update the query param
        // },
      },
      undefined,
      { shallow: true }
    );
  };

  console.log(router.pathname);

  return (
    <>
      <div
        className="w-full relative py-3 px-6 flex items-center justify-between cursor-pointer hover:bg-black-200"
        onClick={data.subMenu.length > 1 ? onShow : () => onHref(data.url)}
      >
        <div className="flex item-center">
          <Image src={data.icon} />
          <h5 className="ml-4 font-semibold text-sm text-black-800">{data.name}</h5>
        </div>
        {data.subMenu.length > 1 && (
          <Image
            src={dropdown_icon}
            className={`tranform transition-all duration-300 ${
              router.route.split("/")[1] === data.mainMenu || show ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
        {router.route === data.url && <ActiveShape disableBg />}
      </div>

      {data.subMenu.length > 1 && (
        <div className={`w-full h-fit-content ${!show && "hidden"} `}>
          {data.subMenu.map((item, i) => (
            <Link href={item.url} key={i}>
              <div
                key={i}
                className="group relative w-full pl-16 pr-4 py-4 hover:bg-black-100 cursor-pointer "
                // onClick={() => onHref(item.url)}
              >
                <h5 className="group-hover:text-black-600 text-sm text-black-800">{item.name}</h5>
                {router.route === item.url && <ActiveShape disableBg={false} />}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItem;
