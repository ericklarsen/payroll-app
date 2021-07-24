import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Table: React.FC<Props> = ({ children }) => (
  <div className="w-full min-h-[400px] h-fit-content overflow-x-auto mt-16">
    <div className="w-full min-w-[1040px]">{children}</div>
  </div>
);

export default Table;
