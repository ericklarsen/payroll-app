import * as React from "react";

interface Props {
  onShow: () => void;
}

const MoreIcon = React.forwardRef<HTMLImageElement, Props>(({ onShow }, ref) => (
  <img
    ref={ref}
    src="/img/more_icon.svg"
    alt="more"
    className="absolute right-6 cursor-pointer"
    onClick={onShow}
  />
));

MoreIcon.displayName = "MoreIcon";

export default MoreIcon;
