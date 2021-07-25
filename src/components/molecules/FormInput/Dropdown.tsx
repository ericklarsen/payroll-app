import * as React from "react";

interface Props {
  label: string;
  placeholder: string;
  show: boolean;
  onShow: () => void;
}

const Dropdown: React.FC<Props> = ({ label, placeholder, show, onShow }) => (
  <div className="w-full first:mt-0 mt-4 lg:mt-6">
    <p className="text-caption2 lg:text-caption1 font-semibold text-black-600">{label}</p>

    {/* Dropdown Component */}
    <div className="w-full relative">
      <div
        className="w-full mt-2 border-b border-black-300 px-3 lg:px-4 py-2 lg:py-3 flex items-center justify-between cursor-pointer"
        onClick={onShow}
      >
        <p className="text-black-400 text-caption1 lg:text-body2 font-normal">{placeholder}</p>
        <img src="/img/dropdown_icon.svg" alt="" className="" />
      </div>

      <div
        className={`${
          show ? "" : "hidden"
        } absolute w-full rounded-b-lg border border-black-300 border-t-0 shadow-md bg-white`}
      >
        <div className="w-full px-3 lg:px-4 py-2 lg:py-3 text-black-800 text-caption1 lg:text-body2 font-normal border-b border-gray-300 last:border-none hover:bg-black-100 cursor-pointer">
          Option 1
        </div>
        <div className="w-full px-3 lg:px-4 py-2 lg:py-3 text-black-800 text-caption1 lg:text-body2 font-normal border-b border-gray-300 last:border-none hover:bg-black-100 cursor-pointer">
          Option 2
        </div>
        <div className="w-full px-3 lg:px-4 py-2 lg:py-3 text-black-800 text-caption1 lg:text-body2 font-normal border-b border-gray-300 last:border-none hover:bg-black-100 cursor-pointer">
          Option 3
        </div>
      </div>
    </div>
    {/* Dropdown Component */}
  </div>
);

export default Dropdown;
