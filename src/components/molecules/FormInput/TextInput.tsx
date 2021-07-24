import * as React from "react";

interface Props {
  type?: string;
  label: string;
  placeholder: string;
  reverse?: boolean;
  icon?: string;
  className?: string;
  onChange?: (e: string) => void;
}

const TextInput: React.FC<Props> = ({
  type,
  label,
  placeholder,
  reverse,
  icon,
  className,
  onChange,
}) => {
  const [isBorder, setBorder] = React.useState<boolean>(false);
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
          onBlur={() => setBorder(false)}
          onFocusCapture={() => setBorder(true)}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;
