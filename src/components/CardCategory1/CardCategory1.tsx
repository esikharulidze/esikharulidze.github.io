import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { TaxonomyType } from "data/types";
import { NavLink } from "react-router-dom";
import { BackendCategory } from "types";

export interface CardCategory1Props {
  className?: string;
  taxonomy: BackendCategory;
  size?: "large" | "normal";
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  taxonomy,
}) => {
  const { posts, title, slug, avatar } = taxonomy;
  return (
    <NavLink
      to={`/article/${slug}`}
      className={`nc-CardCategory1 flex items-center ${className}`}
      data-nc-id="CardCategory1"
    >
      <NcImage
        containerClassName={`flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg mr-4 overflow-hidden`}
        src={avatar}
      />
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 font-semibold`}
        >
          {title}
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          {posts.length} სტატია
        </span>
      </div>
    </NavLink>
  );
};

export default CardCategory1;