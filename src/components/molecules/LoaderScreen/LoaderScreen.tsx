import * as React from "react";
import Image from "next/image";
import bigLogo from "../../../../public/img/bigLogo.svg";

interface Props {
  transparent?: boolean;
}

const LoaderScreen: React.FC<Props> = ({ transparent }) => {
  return (
    <div
      className={`animate-fade-in fixed w-screen h-screen z-100 bg-white flex items-center justify-center ${
        transparent && "bg-opacity-80"
      }`}
    >
      <div className="transform animate-bounce">
        <Image src={bigLogo} />
      </div>
    </div>
  );
};

export default LoaderScreen;
