import ButtonQuizz2, { ButtonProps } from "components/Button/ButtonQuizz2";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonQuizz: React.FC<ButtonPrimaryProps> = ({
  className = "",
  ...args
}) => {
  return (
    <ButtonQuizz2
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonQuizz;
