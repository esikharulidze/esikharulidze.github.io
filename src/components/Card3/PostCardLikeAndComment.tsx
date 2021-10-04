import React, { FC } from "react";
import PostCardCommentBtn from "../PostCardCommentBtn/PostCardCommentBtn";
import PostCardLikeContainer from "../../containers/PostCardLikeContainer/PostCardLikeContainer";
import { BackendPost } from "../../types";

export interface PostCardLikeAndCommentProps {
  className?: string;
  itemClass?: string;
  postData: Pick<BackendPost, "likes" | "id" | "comments">;
  hiddenCommentOnMobile?: boolean;
  onClickLike?: (id: string | number) => void;
}

const PostCardLikeAndComment: FC<PostCardLikeAndCommentProps> = ({
  className = "",
  itemClass = "px-3 h-8 text-xs",
  hiddenCommentOnMobile = true,
  postData,
  onClickLike = () => {},
}) => {

    const like = {
        count: postData.likes,
        isLiked: !!localStorage.getItem('liked')
    }
  return (
    <div
      className={`nc-PostCardLikeAndComment flex items-center space-x-2 ${className}`}
      data-nc-id="PostCardLikeAndComment"
    >
      <PostCardLikeContainer
        className={itemClass}
        like={like}
        onClickLike={onClickLike}
        postId={postData.id}
      />
      {/* <PostCardCommentBtn  კომენტარები
        href={postData.id}
        commentCount={postData.comments.length}
        className={`${
          hiddenCommentOnMobile ? "hidden sm:flex" : "flex"
        }  ${itemClass}`}
      /> */}
    </div>
  );
};

export default PostCardLikeAndComment;
