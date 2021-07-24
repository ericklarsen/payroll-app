import * as React from "react";

interface Props {
  children: React.ReactChild[];
}

const TableHeaderWrapper: React.FC<Props> = ({ children }) => (
  <div className="w-full flex px-6">{children}</div>
);

export default TableHeaderWrapper;
