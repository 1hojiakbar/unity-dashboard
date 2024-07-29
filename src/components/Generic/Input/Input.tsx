import React from "react";

interface GenericInputProps {
  iconLeft?: string;
  iconRight?: string;
  type?: string;
  className?: string;
  placeholder: string;
  onChange?: () => void;
}

const Input: React.FC<GenericInputProps> = ({
  onChange,
  iconLeft,
  iconRight,
  ...props
}) => (
  <div className="flex items-center gap-3 px-2">
    <img src={iconLeft && iconLeft} />
    <input {...props} onChange={onChange} />
    {iconRight && iconRight}
  </div>
);

export default Input;
