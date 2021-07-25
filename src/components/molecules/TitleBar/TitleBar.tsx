import * as React from "react";

interface Props {
  text: string;
}

const TitleBar: React.FC<Props> = ({ text }) => (
  <div className="w-[fit-content]">
    <p className="text-black-800 font-bold text-h6 lg:text-h4">{text}</p>
    <div className="w-12 h-1 bg-yellow-500 mt-1"></div>
  </div>
);

export default TitleBar;
