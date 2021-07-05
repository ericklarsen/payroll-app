import * as React from "react";

const ContentArea: React.FC = ({ children }) => {
  return (
    <div
      className="min-h-screen overflow-y-auto overflow-x-hidden px-15 py-12"
      style={{ width: "calc(100vw - 276px)" }}
    >
      {children}
    </div>
  );
};

export default ContentArea;
