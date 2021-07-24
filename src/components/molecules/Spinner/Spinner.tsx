import * as React from "react";

interface Props {
  className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => (
  <div
    className={`border-[0.2rem] border-black-800 rounded-[50%] w-8 h-8 animate-spin ${className}`}
    style={{ borderTop: "0.2rem solid white" }}
  ></div>
);

export default Spinner;
