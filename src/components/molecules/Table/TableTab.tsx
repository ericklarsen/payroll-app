import * as React from "react";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}

const TableTab: React.FC<Props> = ({ children, active }) => (
  <div
    className={`px-5 lg:px-6 py-1.5 lg:py-2 text-caption1 lg:text-body2 font-semibold text-black-800 rounded-t-md cursor-pointer ${
      active ? "bg-yellow-500" : "bg-white"
    }`}
  >
    {children}
  </div>
);

export default TableTab;
