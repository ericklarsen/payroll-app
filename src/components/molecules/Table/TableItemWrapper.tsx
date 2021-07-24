import * as React from "react";

const TableItemWrapper: React.FC = ({ children }) => (
  <div className="w-full min-w-[1040px] bg-white py-4 px-6 border border-black-300 rounded-lg flex relative even:bg-black-200 mb-2.5">
    {children}
  </div>
);

export default TableItemWrapper;
