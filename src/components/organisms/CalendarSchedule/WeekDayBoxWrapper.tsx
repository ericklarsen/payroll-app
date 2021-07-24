import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const WeekDayBoxWrapper: React.FC<Props> = ({ children }) => (
  <div className="w-full mt-10 grid grid-cols-7 gap-[10px]">{children}</div>
);

export default WeekDayBoxWrapper;
