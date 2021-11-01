import React, { FC } from "react";
import LayoutPage from "components/LayoutPage/LayoutPage";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import { Helmet } from "react-helmet";

export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  {
    name: "ფეისბუქით რეგისტრაცია",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "გუგლით რეგისტრაცია",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageSignUp ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Animus.ge - რეგისტრაცია</title>
      </Helmet>
      <LayoutPage
        subHeading="შეიყვანეთ სწორი ინფორმაცია, ასე შევძლებთ მოგაწოდოთ უკეთესი სერვისი"
        headingEmoji="🎉"
        heading="რეგისტრაცია"
      >
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              ან
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                როგორ მოგმართოთ?
              </span>
              <Input
                type="text"
                placeholder="შეიყვანეთ სახელი"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                თქვენი გვარი
              </span>
              <Input
                type="text"
                placeholder="შეიყვანეთ გვარი"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                ტელეფონის ნომერი
              </span>
              <Input
                type="tel"
                placeholder="5--------"
                className="mt-1 tracking-widest"
                required
                onInvalid={() => {alert("aeee")}}
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                ელ.ფოსტა
              </span>
              <Input
                type="email"
                placeholder="example@animus.ge"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                პაროლი
              </span>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-1 tracking-widest"
              />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                გაიმეორეთ პაროლი
              </span>
              <Input
                type="password"
                placeholder="••••••••"
                className="mt-1 tracking-widest"
              />
            </label>
            <ButtonPrimary type="submit">რეგისტრაცია</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            უკვე გაქვთ ანგარიში? {` `}
            <NcLink to="/login">ავტორიზაცია</NcLink>
          </span>
        </div>
      </LayoutPage>
    </div>
  );
};

export default PageSignUp;
