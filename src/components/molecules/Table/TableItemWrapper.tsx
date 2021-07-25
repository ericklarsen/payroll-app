import * as React from "react";
import { useClickOutside } from "../../../hooks/clickOutside";
import MoreIcon from "./MoreIcon";
import MoreMenu from "./MoreMenu";

const TableItemWrapper: React.FC = ({ children }) => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const onShow = () => {
    setShow(!isShow);
  };
  const menuRef = React.useRef();

  useClickOutside(menuRef, () => {
    setShow(false);
  });

  return (
    <div className="w-full min-w-[1040px] bg-white py-3 lg:py-4 px-6 border border-black-300  rounded-lg flex items-center relative even:bg-black-200 even:bg-opacity-60 mb-2.5">
      {children}
      <MoreIcon ref={menuRef} onShow={onShow} />
      <MoreMenu isShow={isShow} />
    </div>
  );
};

export default TableItemWrapper;
