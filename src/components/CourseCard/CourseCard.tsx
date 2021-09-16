import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "components/Button/ButtonPrimary";
import { Course } from "data/types";

export interface CourseCardProps {
  className?: string;
  rightImg?: string;
  data: Course
}

const CourseCard: FC<CourseCardProps> = ({
  className = "",
  rightImg = rightImgDemo,
  data
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center dark: bg-opacity-20 rounded-3xl p-10 ${className}`}
      style={{backgroundColor: data.color}}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="mb-14 lg:mb-0 lg:mr-10">
        <span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
          {data.subtitle}
        </span>
        <h2 className="font-semibold text-xl sm:text-xl mt-3">
          {data.title}
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400 text-xs">
          {data.description}
        </span>
        <ButtonPrimary href={data.href} className="mt-8">Become an author</ButtonPrimary>
      </div>
      <div className="flex-grow">
        <NcImage src={data.rightimg} />
      </div>
    </div>
  );
};

export default CourseCard;
