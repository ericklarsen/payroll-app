import * as React from "react";
import Image from "next/image";
import bigLogo from "../../../../public/img/bigLogo.svg";

const LoaderScreen = () => {
  return (
    <div className="fixed w-screen h-screen z-100 bg-white flex items-center justify-center">
      <div className="transform animate-bounce">
        <Image src={bigLogo} />
      </div>
    </div>
  );
};

export default LoaderScreen;
