import * as React from "react";

interface Props {
  width: number;
  text: string;
}

const TableHeader: React.FC<Props> = ({ width, text }) => (
  <div className={`py-1.5 my-3 mr-[18px] text-body2 text-black-500 break-words`} style={{ width: `${width}px` }}>
    {text}
  </div>
);

export default TableHeader;
