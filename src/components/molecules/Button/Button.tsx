import * as React from "react";
import Spinner from "../Spinner/Spinner";

interface Props {
  text: string;
  type: string;
  stretch?: boolean;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  isLoading = false,
  type,
  stretch,
  onClick,
  className,
}) => (
  <button
    className={`${
      stretch ? "w-full" : "px-6"
    } min-w-[120px] mt-6 rounded-[10px] font-bold py-2 lg:py-2.5 ${
      type === "primary"
        ? "bg-yellow-500 hover:bg-yellow-400 text-black-700"
        : type === "secondary" && "bg-black-700 hover:bg-black-600 text-yellow-500"
    } flex items-center justify-center text-caption1 lg:text-body2 ${className}`}
    onClick={!isLoading ? onClick : () => {}}
  >
    {!isLoading ? text : <Spinner />}
  </button>
);

export default Button;
