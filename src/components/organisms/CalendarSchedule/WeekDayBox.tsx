import * as React from "react";

interface Props {
  text: string;
}

const WeekDayBox: React.FC<Props> = ({ text }) => (
  <div className="w-full py-1 font-semibold text-body2 text-black-800 bg-yellow-500 flex justify-center rounded-md">
    {text}
  </div>
);

export default WeekDayBox;
