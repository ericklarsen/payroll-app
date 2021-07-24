import * as React from "react";

interface Props {
  text: string;
}

const TitleBar: React.FC<Props> = ({ text }) => (
  <div className="w-[fit-content]">
    <p className="text-black-800 font-bold text-h4">{text}</p>
    <div className="w-12 h-1.5 bg-yellow-500 mt-2"></div>
  </div>
);

export default TitleBar;
