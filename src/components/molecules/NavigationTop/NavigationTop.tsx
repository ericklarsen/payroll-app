import * as React from "react";
import dropdown_icon from "../../../../public/img/dropdown_icon.svg";
import user_icon from "../../../../public/img/user_icon.svg";
import date_icon from "../../../../public/img/date_icon.svg";
import info_icon from "../../../../public/img/info_icon.svg";
import download_icon from "../../../../public/img/download_icon.svg";
import notif_icon from "../../../../public/img/notif_icon.svg";
import Image from "next/image";

const NavigationTop = () => {
  const [isShow, setShow] = React.useState<boolean>(false);

  const onShow = () => {
    setShow(!isShow);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center">
        <Image src={date_icon} alt="date" />
        <h6 className="ml-4">
          <span className="font-semibold">Senin</span>, 20 Juni 2021
        </h6>
      </div>

      <div className="relative flex items-center">
        <div className="group mr-5 flex items-center cursor-pointer">
          <p className="body2 font-semibold text-black-800 mr-2.5">{`Install this Web App >`} </p>
          <div className="flex group-hover:scale-105 transition-all">
            <Image src={download_icon} alt="download" />
          </div>
        </div>

        <div className="mr-5 flex cursor-pointer hover:scale-105 transition-all">
          <Image src={info_icon} alt="info" />
        </div>

        <div className="mr-5 flex cursor-pointer hover:scale-105 transition-all">
          <Image src={notif_icon} alt="notif" />
        </div>

        <p className="body2 font-semibold mr-2.5 text-black-800">Hi, Admin!</p>

        <div className="flex items-center cursor-pointer" onClick={onShow}>
          <Image src={user_icon} alt="user" />
          <div className="ml-2.5 h-fit-content">
            <Image src={dropdown_icon} alt="dropdown" />
          </div>
        </div>

        <div
          className={`absolute bg-white border border-black-400 rounded-xl right-0 top-16 overflow-hidden transition-all ${
            !isShow ? "-translate-y-4 opacity-0" : "-translate-y-0 opacity-100"
          }`}
          style={{ width: "180px" }}
        >
          <div className="w-full p-3.5 cursor-pointer hover:bg-yellow-400 border-b border-black-400">
            <p className="body2 text-black-800">Change password</p>
          </div>
          <div className="w-full p-3.5 cursor-pointer hover:bg-yellow-400 border-b border-black-400">
            <p className="body2 text-black-800">Add new user</p>
          </div>
          <div className="w-full p-3.5 cursor-pointer hover:bg-yellow-400">
            <p className="body2 text-black-800">Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTop;
