import HeadBackgroundCommon from "components/HeadBackgroundCommon/HeadBackgroundCommon";
import Heading2 from "components/Heading/Heading2";
import React, { FC } from "react";

export interface LayoutPageProps {
  className?: string;
  heading: string;
  headingEmoji?: string;
  subHeading?: string;
  isInner?: boolean
}

const LayoutPage: FC<LayoutPageProps> = ({
  className = "",
  heading,
  subHeading,
  headingEmoji,
  children,
  isInner=false
}) => {
  return (
    <div
      className={`nc-LayoutPage relative ${className}`}
      data-nc-id="LayoutPage"
    >
      <HeadBackgroundCommon isInner={isInner}/>
      <div className="container relative pt-10 pb-16 lg:pt-20 lg:pb-28">
        {/* HEADER */}
        <header className="text-center mx-auto">
          <Heading2 emoji={headingEmoji}>{heading}</Heading2>
          {subHeading && (
            <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
              {subHeading}
            </span>
          )}
        </header>

        {/* CONTENT */}
        <div className="p-5 mx-auto bg-white rounded-3xl sm:p-10 mt-5 lg:mt-10 lg:p-16 dark:bg-neutral-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
