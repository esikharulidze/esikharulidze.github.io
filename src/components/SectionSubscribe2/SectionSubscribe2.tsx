import React, { FC } from "react";
import ButtonCircle from "components/Button/ButtonCircle";
import rightImg from "images/SVG-subcribe2.png";
import NcImage from "components/NcImage/NcImage";
import Badge from "components/Badge/Badge";
import Input from "components/Input/Input";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-3xl">შემოუერთდით ანიმუსს 🎉</h2>
        <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
          გამოიწერეთ ცენტრის სიახლეები და მიიღეთ:
        </span>
        <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              ფასდაკლებები შეხვედრებზე
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              ექსკლუზიური შეთავაზებები
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="green" name="03" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              ბოლო განახლებები
            </span>
          </li>
        </ul>
        <form className="mt-10 relative max-w-sm">
          <Input
            required
            aria-required
            placeholder="შეიყვანეთ ელ.ფოსტა"
            type="email"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-1"
          >
            <i className="las la-arrow-right text-xl"></i>
          </ButtonCircle>
        </form>
      </div>
      <div className="flex-grow">
        <NcImage src={"https://animuscontent.s3.eu-central-1.amazonaws.com/subscription-hero.png"} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
