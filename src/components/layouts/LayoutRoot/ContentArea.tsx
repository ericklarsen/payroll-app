import * as React from "react";

const ContentArea: React.FC = ({ children }) => {
  return (
    <div
      className="min-h-screen h-screen overflow-y-auto overflow-x-hidden px-5 lg:px-15 pb-[100px] pt-[108px] lg:py-12 w-full lg:w-content-field"
      // style={{ width: "calc(100vw - 276px)" }}
    >
      {children}
    </div>
  );
};

export default ContentArea;
