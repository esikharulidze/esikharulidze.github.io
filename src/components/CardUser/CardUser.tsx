import React, { FC } from "react";
import { PostAuthorType } from "data/types";
import { NavLink } from "react-router-dom";
import Avatar from "components/Avatar/Avatar";
import { BackendUser } from "types";

export interface CardUserProps {
  className?: string;
  author?: BackendUser;
}

const CardUser: FC<CardUserProps> = ({ className = "", author }) => {
  // const { firstName, lastName, avatar, jobTitle, slug } = author;
  // const displayName = `${firstName} ${lastName}`
  return (
    <NavLink
      to={`/dashboard`}
      // to={`/team/${slug}`}
      className={`nc-CardAuthor flex items-center ${className}`}
      data-nc-id="CardAuthor"
    >
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-4"
        radius="rounded-full"
        // imgUrl={avatar}
        imgUrl="https://i.ibb.co/v36BcYv/1.jpg"
        // userName={displayName}
      />
      <div>
        <h2
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {/* {displayName} */} გამარჯობა, ლევან
        </h2>
        <span
          className={`block mt-[2px] text-sm text-neutral-500 dark:text-neutral-400`}
        >
          {/* {jobTitle} */} გისურვებ წარმატებებს
        </span>
      </div>
    </NavLink>
  );
};

export default CardUser;
