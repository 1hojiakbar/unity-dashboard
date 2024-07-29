import React from "react";

interface GenericButtonProps {
  children: React.ReactNode;
  iconLeft?: string;
  className: string;
  iconRight?: string;
  onClick?: () => void;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  children,
  onClick,
  iconRight,
  className,
  iconLeft,
  ...props
}) => {
  return (
    <button {...props} className={className} onClick={onClick}>
      {iconLeft && iconLeft}
      {children || "Generic Button"}
      {iconRight && iconRight}
    </button>
  );
};

export default GenericButton;
