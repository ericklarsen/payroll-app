import * as React from "react";

interface Props {
  day: string;
  disable: boolean;
  onDate: (day?: string) => void;
}

const DayBox: React.FC<Props> = ({ day, disable, onDate }) => (
  <div
    key={day}
    className={`w-full h-[120px] flex flex-col justify-between p-2.5 border border-black-300 rounded-lg shadow-md ${
      disable && "grayscale opacity-50"
    }`}
  >
    <div className="w-full flex justify-between">
      <p className="text-h5 text-black-500">{day}</p>
      {!disable && (
        <img
          src="/img/edit-icon.svg"
          alt=""
          className="cursor-pointer transform hover:scale-125 transition-all"
          onClick={() => onDate(day)}
        />
      )}
    </div>
    <div className="w-full rounded-md relative flex items-center justify-center bg-green-400 p-1">
      <img className="absolute left-2" src="/img/info-icon.svg" />
      <p className="text-caption2 text-white font-semibold">Hari Biasa</p>
    </div>
  </div>
);
export default DayBox;
