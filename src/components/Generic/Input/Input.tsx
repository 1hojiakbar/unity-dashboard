import React from "react";

interface GenericInputProps {
  children: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  onChange: () => void;
}

const Input: React.FC<GenericInputProps> = ({
  onChange,
  iconLeft,
  iconRight,
  ...props
}) => (
  <div>
    {iconLeft && iconLeft}
    <input {...props} onChange={onChange} />
    {iconRight && iconRight}
  </div>
);

export default Input;
