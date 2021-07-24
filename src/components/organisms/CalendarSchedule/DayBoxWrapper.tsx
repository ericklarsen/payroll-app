import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const DayBoxWrapper: React.FC<Props> = ({ children }) => (
  <div className="w-full mt-5 grid grid-cols-7 gap-[10px]">{children}</div>
);

export default DayBoxWrapper;
