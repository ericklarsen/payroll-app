import * as React from "react";

interface Props {
  isShow: boolean;
}

const MoreMenu: React.FC<Props> = ({ isShow }) => (
  <div
    className={`transition-all absolute top-4 right-14 w-[104px] border border-black-300 rounded-md bg-white z-10 shadow-md ${
      !isShow ? "-translate-y-4 opacity-0 pointer-events-none" : "-translate-y-0 opacity-100"
    }`}
  >
    <div className="w-full p-[10px] lg:px-4 py-2 text-caption1 lg:text-body2 border-b border-black-300 last:border-none hover:bg-black-100 cursor-pointer">
      Edit
    </div>
    <div className="w-full p-[10px] lg:px-4 py-2 text-caption1 lg:text-body2 border-b border-black-300 last:border-none hover:bg-black-100 cursor-pointer">
      Delete
    </div>
  </div>
);

export default MoreMenu;
