import * as React from "react";

interface Props {
  width: number;
  text: string;
}

const TableItemText: React.FC<Props> = ({ width, text }) => (
  <div
    className={`py-1.5 mr-[18px] text-body2 text-black-800 break-words`}
    style={{ width: `${width}px` }}
  >
    {text}
  </div>
);

export default TableItemText;
