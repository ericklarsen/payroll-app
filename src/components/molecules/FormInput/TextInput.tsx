import * as React from "react";

interface Props {
  type?: string;
  label: string;
  placeholder: string;
  reverse?: boolean;
  icon?: string;
  className?: string;
}

const TextInput: React.FC<Props> = ({ type, label, placeholder, reverse, icon, className }) => {
  const [isBorder, setBorder] = React.useState<boolean>(false);
  console.log(isBorder);
  return (
    <div className={`w-full first:mt-0 mt-6 ${className}`}>
      {label && <p className="text-caption1 font-semibold text-black-600 mb-2">{label}</p>}
      <div
        className={`relative w-full border-b border-black-300 flex ${
          reverse && "flex-row-reverse"
        }`}
      >
        {isBorder && (
          <div className="animate-fade-in absolute rounded pointer-events-none z-30 w-full h-full border-2 border-black-500"></div>
        )}
        {icon && <img className={reverse ? "mr-3" : "ml-3"} src={icon} />}
        <input
          type={type || "text"}
          placeholder={placeholder}
          className="w-full px-4 py-3 text-body2 text-black-800 font-normal placeholder-black-400 outline-none"
          // onFocus={(e) => console.log(e)}
          onBlur={(e) => setBorder(false)}
          onFocusCapture={(e) => setBorder(true)}
        />
      </div>
    </div>
  );
};

export default TextInput;
