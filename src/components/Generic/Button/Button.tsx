import React from "react";

interface GenericButtonProps {
  children: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  children,
  onClick,
  iconRight,
  iconLeft,
  ...props
}) => {
  return (
    <button {...props} onClick={onClick}>
      {iconLeft && iconLeft}
      {children || "Generic Button"}
      {iconRight && iconRight}
    </button>
  );
};

export default GenericButton;
