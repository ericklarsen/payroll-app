import * as React from "react";

interface Props {
  isShow: boolean;
}

const MoreMenu: React.FC<Props> = ({ isShow }) => (
  <div
    className={`${
      !isShow ? "hidden" : ""
    } absolute top-4 right-14 w-[104px] border border-black-300 rounded-md shadow-sm bg-white z-10`}
  >
    <div className="w-full px-4 py-2 text-body2 border-b border-black-300 last:border-none hover:bg-black-100 cursor-pointer">
      Edit
    </div>
    <div className="w-full px-4 py-2 text-body2 border-b border-black-300 last:border-none hover:bg-black-100 cursor-pointer">
      Delete
    </div>
  </div>
);

export default MoreMenu;
