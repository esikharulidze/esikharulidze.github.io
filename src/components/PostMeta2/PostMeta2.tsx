import React, { FC } from "react";
import Avatar from "components/Avatar/Avatar";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import { BackendPost } from "types";
import { format } from "date-fns";
import { ka } from "date-fns/locale";

export interface PostMeta2Props {
  className?: string;
  meta: Pick<BackendPost, "updatedAt" | "author" | "categories" | "readingTime">;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta,
  hiddenCategories = false,
  size = "normal",
  avatarRounded,
}) => {
  const { updatedAt, author, categories, readingTime } = meta;
  const displayName = `${author.firstName} ${author.lastName}`
  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
      data-nc-id="PostMeta2"
    >
      <Link to={author.id} className="flex items-center space-x-2">
        <Avatar
          radius={avatarRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={author.avatar}
          userName={displayName}
        />
      </Link>
      <div className="ml-3">
        <div className="flex items-center">
          <Link to={author.id} className="block font-semibold">
            {displayName}
          </Link>

          {!hiddenCategories && (
            <>
              <span className="mx-2 font-semibold">·</span>
              <div className="ml-0">
                <span className="text-xs">🏷 </span>
                {categories.map((cat, index) => (
                  <Link key={cat.id} to={cat.id} className="font-semibold">
                    {cat.title}
                    {index < categories.length - 1 && <span>, </span>}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="text-xs mt-[6px]">
          <span className="text-neutral-700 dark:text-neutral-300">{format(new Date(updatedAt), 'MMM d, yyyy', {locale: ka})}</span>
          <span className="mx-2 font-semibold">·</span>
          <span className="text-neutral-700 dark:text-neutral-300">
            {readingTime} წუთის საკითხავი
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
