import * as React from "react";

interface Props {
  onShow: () => void;
}

const MoreIcon: React.FC<Props> = ({ onShow }) => (
  <img
    src="/img/more_icon.svg"
    alt="more"
    className="absolute right-6 top-5 cursor-pointer"
    onClick={onShow}
  />
);

export default MoreIcon;
