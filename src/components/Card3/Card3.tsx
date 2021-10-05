import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import PostCardMeta from "./PostCardMeta";
import PostCardSaveAction from "./PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import PostCardLikeAndComment from "./PostCardLikeAndComment";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { BackendPost } from "types";

export interface Card3Props {
  className?: string;
  post: BackendPost;
  size?: "normal" | "large";
}

const Card3: FC<Card3Props> = ({
  className = "h-full",
  size = "large",
  post,
}) => {
  const {
    title,
    readingTime,
    slug,
    avatar,
    content,
    categories,
  } = post;

  const href = 'post/' + slug

  return (
    <div
      className={`nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group ${className}`}
      data-nc-id="Card3"
    >
      <Link to={href} className="absolute inset-0"></Link>
      <div className="flex flex-col flex-grow">
        <div className="space-y-3.5 mb-4">
          <CategoryBadgeList categories={categories} />
          <div>
            <h2
              className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100  ${
                size === "large" ? "text-xl" : "text-base"
              }`}
            >
              <Link to={href} className="line-clamp-2" title={title}>
                {title}
              </Link>
            </h2>
            {size === "large" && (
              <div className="hidden sm:block sm:mt-2">
                <span className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">
                  
                  {content ? <div dangerouslySetInnerHTML={{__html: content}}></div> : <></>}
                </span>
              </div>
            )}
          </div>

          <PostCardMeta meta={{ ...post }} />
        </div>
        <div className="flex items-center flex-wrap justify-between mt-auto">
          <PostCardLikeAndComment postData={post} />
          <PostCardSaveAction readingTime={post.readingTime} />
        </div>
      </div>

      <div
        className={`block flex-shrink-0 ${
          size === "large"
            ? "sm:w-56 sm:ml-6 rounded-3xl"
            : "sm:w-40 sm:ml-5 rounded-2xl"
        } overflow-hidden mb-5 sm:mb-0`}
      >
        <div className={`w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 `}>
          <NcImage
            containerClassName="absolute inset-0"
            src={avatar}
            alt={title}
          />
          <span>
            <PostTypeFeaturedIcon
              className="absolute left-2 bottom-2"
              postType={'standard'}
              wrapSize="w-8 h-8"
              iconSize="w-4 h-4"
            />
          </span>
        </div>
        <Link to={href} className="absolute inset-0"></Link>
      </div>
    </div>
  );
};

export default Card3;