import LayoutPage from "components/LayoutPage/LayoutPage";
import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import { Helmet } from "react-helmet";

export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>ანიმუსი - ავტორიზაცია </title>
      </Helmet>
      <LayoutPage
        subHeading="მართეთ თქვენი ანგარიში, ვიზიტები და კითხვარები"
        headingEmoji="🔑"
        heading="ავტორიზაცია"
      >
        <div className="max-w-md mx-auto space-y-6">
          {/* OR */}
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                მომხმარებელი
              </span>
              <Input
                type="text"
                placeholder="ელ.ფოსტა ან ტელეფონი"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                პაროლი
                <NcLink to="/forgot-pass" className="text-sm">
                  პაროლის აღდგენა
                </NcLink>
              </span>
              <Input type="password" className="mt-1" 
              placeholder="﹡﹡﹡﹡﹡﹡﹡﹡"
              />
            </label>
            <ButtonPrimary type="submit">ავტორიზაცია</ButtonPrimary>
          </form>

          {/* ==== */}
          {/* <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <NcLink to="/signup">Create an account</NcLink>
          </span> */}
        </div>
      </LayoutPage>
    </div>
  );
};

export default PageLogin;
