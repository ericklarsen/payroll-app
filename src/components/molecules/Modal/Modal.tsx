import * as React from "react";

interface Props {
  title?: string;
  width?: string;
  show: boolean;
  children: React.ReactNode;
  onShow: () => void;
}

const Modal: React.FC<Props> = ({ title, width, show, children, onShow }) => (
  <div
    className={`${
      show ? "" : "hidden"
    } animate-fade-in fixed w-screen h-screen top-0 left-0 z-100 flex items-center justify-center`}
  >
    <div className="fixed w-screen h-screen bg-black-800 opacity-50"></div>

    <div
      className={`${width ? width : "w-[620px]"} h-fit-content bg-white shadow-md rounded-2xl z-10`}
    >
      <div className="w-full px-6 py-5 flex justify-between items-center border-b border-black-300">
        <p className="text-body1 font-bold text-black-800">{title || ""}</p>
        <img src="/img/close.svg" alt="close" className="cursor-pointer" onClick={onShow} />
      </div>
      <div className="w-full p-6 max-h-[560px] overflow-y-auto relative">{children}</div>
    </div>
  </div>
);
export default Modal;
