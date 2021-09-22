import { PostActionDropdownProps } from "components/PostActionDropdown/PostActionDropdown";
import BookmarkContainer from "containers/BookmarkContainer/BookmarkContainer";
import { PostDataType } from "data/types";
import React, { FC } from "react";

export interface PostCardSaveActionProps
  extends Pick<PostActionDropdownProps, "dropdownPositon"> {
  className?: string;
  classBgIcon?: string;
  readingTime?: string;
  hidenReadingTime?: boolean;
}

const PostCardSaveAction: FC<PostCardSaveActionProps> = ({
  className = "",
  hidenReadingTime = false,
  classBgIcon,
  readingTime,
}) => {

  return (
    <div
      className={`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${className}`}
      data-nc-id="PostCardSaveAction"
    >
      {!hidenReadingTime && !!readingTime && (
        <span>{readingTime} წუთის საკითხავი</span>
      )}
    </div>
  );
};

export default PostCardSaveAction;
