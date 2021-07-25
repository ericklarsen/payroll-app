import * as React from "react";

const TableTabWrapper: React.FC = ({ children }) => (
  <div className="w-full flex items-center justify-between">
    <div className="flex w-full border-b border-black-300 ">{children}</div>
  </div>
);

export default TableTabWrapper;
