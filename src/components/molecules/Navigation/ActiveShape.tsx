import * as React from "react";

interface Props {
  disableBg: boolean;
}

const ActiveShape: React.FC<Props> = ({ disableBg = false }) => {
  return (
    <>
      {!disableBg && (
        <div
          className="absolute right-0 top-0 h-full w-full -z-1"
          style={{ backgroundColor: "#f7f7f7" }}
        ></div>
      )}
      <div className="absolute right-0 top-0 h-full w-1.5 bg-yellow-500"></div>
    </>
  );
};

export default ActiveShape;
