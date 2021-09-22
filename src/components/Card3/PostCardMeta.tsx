import React, { FC } from "react";
import Avatar from "../Avatar/Avatar";
import {BackendPost} from '../../types'
import { Link } from "react-router-dom";
import {format} from 'date-fns'
import {ka} from 'date-fns/locale'

export interface PostCardMetaProps {
  className?: string;
  meta: Pick<BackendPost, "updatedAt" | "author">;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const { updatedAt, author } = meta;
  const displayName = `${author.firstName} ${author.lastName}`
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link to={author.id} className="relative flex items-center space-x-2">
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={author.avatar}
            userName={displayName}
          />
        )}
        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {displayName}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
          {format(new Date(updatedAt), 'MMM d, yyyy', {locale: ka})}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
