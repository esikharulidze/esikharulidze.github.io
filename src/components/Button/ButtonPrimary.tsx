import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {
  textArrangement?: string
  bgColor?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  textArrangement = "items-center justify-center",
  bgColor = "bg-primary-6000 hover:bg-primary-700 text-neutral-50",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 ${className} `}
      textArrangement={textArrangement}
      bgColor={bgColor}
      {...args}
    />
  );
};

export default ButtonPrimary;
