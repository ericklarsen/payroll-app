import * as React from "react";

interface Props {
  width: number;
  text: string;
}

const TableItemText: React.FC<Props> = ({ width, text }) => (
  <div
    className={`py-1 lg:py-1.5 mr-[18px] text-caption1 lg:text-body2 text-black-800 break-words`}
    style={{ width: `${width}px` }}
  >
    {text}
  </div>
);

export default TableItemText;
