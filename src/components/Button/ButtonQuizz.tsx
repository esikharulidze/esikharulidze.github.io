import ButtonQuizz2, { ButtonProps } from "components/Button/ButtonQuizz2";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {
  bgColor?: string
}

const ButtonQuizz: React.FC<ButtonPrimaryProps> = ({
  className = "",
  bgColor = "bg-primary-6000 hover:bg-primary-700",
  ...args
}) => {
  return (
    <ButtonQuizz2
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 text-neutral-50 ${className}`}
      bgColor={bgColor}
      {...args}
    />
  );
};

export default ButtonQuizz;
