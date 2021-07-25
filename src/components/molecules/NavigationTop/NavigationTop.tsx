import * as React from "react";
import { useClickOutside } from "../../../hooks/clickOutside";

const NavigationTop: React.FC = () => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const menuRef = React.useRef();

  const onShow = () => {
    setShow(!isShow);
  };

  const onLogout = () => {
    localStorage.setItem("isLoggedIn", "false");

    // router.push("/dashboard");
    window.location.href = "/";
  };

  useClickOutside(menuRef, () => {
    setShow(false);
  });

  return (
    <div className="fixed z-100 left-0 shadow-md lg:shadow-none top-0 p-5 lg:p-0 lg:relative w-full flex items-center justify-between mb-16 bg-white">
      <div className="hidden lg:flex items-center">
        <img src="/img/date_icon.svg" alt="date" />
        <h6 className="ml-4">
          <span className="font-semibold">Senin</span>, 20 Juni 2021
        </h6>
      </div>

      <img src="/img/Logo.svg" alt="date" className="lg:hidden h-[28px] object-contain" />

      <div className="relative flex items-center">
        <div className="group mr-3 lg:mr-5 flex items-center cursor-pointer">
          <div className="flex group-hover:scale-105 transition-all">
            <img
              src="/img/download_icon.svg"
              alt="download"
              className="h-[28px] object-contain lg:h-fit-content"
            />
          </div>
        </div>

        <div className="mr-3 lg:mr-5 flex cursor-pointer hover:scale-105 transition-all">
          <img
            src="/img/info_icon.svg"
            alt="info"
            className="h-[28px] object-contain lg:h-fit-content"
          />
        </div>

        <div className="mr-3 lg:mr-5 flex cursor-pointer hover:scale-105 transition-all">
          <img
            src="/img/notif_icon.svg"
            alt="notif"
            className="h-[28px] object-contain lg:h-fit-content"
          />
        </div>

        <p className="text-caption1 lg:text-body2 font-semibold mr-2.5 text-black-800">
          Hi, Admin!
        </p>

        <div className="flex items-center cursor-pointer" onClick={onShow} ref={menuRef}>
          <img
            src="/img/user_icon.svg"
            alt="user"
            className="h-[28px] object-contain lg:h-fit-content"
          />
          <div className="ml-2.5 h-fit-content">
            <img src="/img/dropdown_icon.svg" alt="dropdown" />
          </div>
        </div>

        <div
          className={`w-[150px] lg:w-[180px] absolute bg-white border border-black-400 rounded-xl right-0 top-10 lg:top-16 overflow-hidden transition-all shadow-md ${
            !isShow ? "-translate-y-4 opacity-0 pointer-events-none" : "-translate-y-0 opacity-100"
          }`}
        >
          <div className="w-full p-2.5 lg:p-3.5 cursor-pointer hover:bg-yellow-400 border-b border-black-400">
            <p className="text-caption1 lg:text-body2 text-black-800">Change password</p>
          </div>
          <div className="w-full p-2.5 lg:p-3.5 cursor-pointer hover:bg-yellow-400 border-b border-black-400">
            <p className="text-caption1 lg:text-body2 text-black-800">Add new user</p>
          </div>
          <div
            className="w-full p-2.5 lg:p-3.5 cursor-pointer hover:bg-yellow-400"
            onClick={onLogout}
          >
            <p className="text-caption1 lg:text-body2 text-black-800">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTop;
