import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {
  textArrangement?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  textArrangement = "items-center justify-center",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
      textArrangement={textArrangement}
      {...args}
    />
  );
};

export default ButtonPrimary;
